'use strict';

describe("controller: UsersController", function() {

  beforeEach(function() {
    module("angularSorcery");
  });

  var scope, UserRsc, SessionRsc;

  beforeEach(inject(function($controller, $rootScope, User, Session) {
    scope = $rootScope.$new();
    SessionRsc = Session;
    UserRsc = User;
    spyOn(UserRsc, 'query');
    spyOn(SessionRsc, 'getCurrentUser');

    $controller('UsersController', {
      $scope: scope,
      Session: SessionRsc,
      User: UserRsc
    });
  }));

  describe("scope.users", function() {
    it("should call User.query()", function() {
      expect(UserRsc.query).toHaveBeenCalled();
    });
  });
  describe("scope.currentUser", function() {
    it("should call Session.getCurrentUser()", function() {
      expect(SessionRsc.getCurrentUser).toHaveBeenCalled();
    });
  });

});
