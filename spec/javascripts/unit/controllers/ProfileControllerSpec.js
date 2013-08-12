'use strict';

describe("controller: ProfileController", function() {

  beforeEach(module("angularSorcery"));

  var scope, getCurrentUser;

  beforeEach(inject(function($controller, $rootScope, Session) {
    scope = $rootScope.$new();
    getCurrentUser = spyOn(Session, 'getCurrentUser').andReturn({user: {id:1}});
    $controller('ProfileController', { $scope: scope });
  }));

  describe("scope.user", function() {
    it("should get a user by calling Session.getCurrentUser()", function() {
      expect(getCurrentUser).toHaveBeenCalled();
      expect(scope.user).toEqual({user: {id:1}});
    });
  });

  describe("scope.update", function() {
    it("should call $scope.user.$save", function() {
      scope.user.$save = function(){};
      spyOn(scope.user, '$save');
      scope.update();
      expect(scope.user.$save).toHaveBeenCalled();
    });
  });

});
