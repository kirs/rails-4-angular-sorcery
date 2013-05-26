angular.module('angularDevise.controllers').controller('UsersController', ['$scope', 'User', function($scope, User) {

  $scope.users = User.query();

}]);
