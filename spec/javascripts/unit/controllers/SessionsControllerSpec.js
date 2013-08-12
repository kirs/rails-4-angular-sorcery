'use strict';

describe("controller: SessionsController", function() {

  beforeEach(function() {
    module("angularSorcery");
  });

  var scope, location, httpBackend, SessionRsc;

  beforeEach(inject(function($controller, $rootScope, $location, $httpBackend, Session) {
    location = $location;
    httpBackend = $httpBackend;
    scope = $rootScope.$new();
    SessionRsc = Session;
    spyOn($location, 'path');

    $controller('SessionsController', {
      $scope: scope,
      $location: location,
      Session: SessionRsc
    });
  }));

  describe("Successfully signing in", function() {
    it("should redirect you to /home", function() {
      scope.session.remember_me = scope.session.remember_me == true ? 1 : 0
      httpBackend.expectPOST('/sessions', scope.session).respond({data: {id: 1}});
      scope.create();
      httpBackend.flush();
      expect(location.path).toHaveBeenCalledWith('/home');
    });
  });

});
