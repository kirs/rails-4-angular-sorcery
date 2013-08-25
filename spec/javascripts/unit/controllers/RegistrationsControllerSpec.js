'use strict';

describe("controller: RegistrationsController", function() {

  beforeEach(module("angularSorcery"));

  var scope, location, httpBackend, SessionRsc;

  beforeEach(inject(function($controller, $rootScope, $location, $httpBackend, Session) {
    location = $location;
    SessionRsc = Session;
    httpBackend = $httpBackend;
    scope = $rootScope.$new();
    spyOn(location, 'path');

    $controller('RegistrationsController', {
      $scope: scope,
      $location: location,
      Session: SessionRsc
    });
  }));

  describe("Successfully creating a user", function() {
    it("should redirect you to /home", function() {
      httpBackend.expectPOST('/users', {user: scope.registration}).respond(200);
      scope.create();
      httpBackend.flush();
      expect(location.path).toHaveBeenCalledWith('/home');
    });
  });

  describe("scope properties", function() {
    it("should have a registration object containing preset strings of necessary fields for registration", inject(function(UserRegistration) {
      expect(scope.registration.constructor == UserRegistration).toBe(true);
      expect(scope.registration.email).toMatch(/foo-(\d*)@bar.com/);
      expect(scope.registration.password).toEqual("example");
      expect(scope.registration.password_confirmation).toEqual("example");
    }));
  });

});
