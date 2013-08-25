'use strict';

describe("controller: MainController", function() {

  beforeEach(function() {
    module("angularSorcery");
  });

  var scope;

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    $controller('MainController', {
      $scope: scope,
    });
  }));

  describe("scope.session_resource property", function() {
    it("should be defined", function() {
      expect(scope.session_resource).toBeDefined();
    });
  });

});
