angular.module('angularSorcery.controllers').controller('ProfileController', ['$scope', '$location', 'User', 'Session', function($scope, $location, User, Session) {

  $scope.user = Session.getCurrentUser();

  $scope.update = function() {
    $scope.user.$save();
  };

}]);
