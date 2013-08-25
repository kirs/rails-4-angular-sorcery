angular.module('angularSorcery.controllers').controller('UsersController', ['$scope', 'User', 'Session', function($scope, User, Session) {

  $scope.users = User.query();
  $scope.currentUser = Session.getCurrentUser();

}]);
