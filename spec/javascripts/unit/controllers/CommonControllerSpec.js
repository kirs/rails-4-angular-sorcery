'use strict';

describe("controller: CommonController", function() {

  beforeEach(function() {
    module("angularSorcery");
  });

  var scope, location, SessionRsc, httpBackend;

  beforeEach(inject(function($controller, $rootScope, $location, $httpBackend, Session) {
    location = $location;
    httpBackend = $httpBackend;
    scope = $rootScope.$new();
    SessionRsc = Session;
    spyOn($location, 'path');

    $controller('CommonController', {
      $scope: scope,
      $location: location,
      Session: SessionRsc
    });
  }));

  describe("scope.destroy", function() {
    it("should call scope.session.userSession.$destroy()", function() {
      spyOn(scope.session.userSession, '$destroy').andReturn({success:function(){}});
      scope.destroy();
      expect(scope.session.userSession.$destroy).toHaveBeenCalled();
    });
  });

});
