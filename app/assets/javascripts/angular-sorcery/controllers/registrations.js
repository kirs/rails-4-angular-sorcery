//
angular.module('angularSorcery.controllers').controller('RegistrationsController', ['$scope', '$location', 'Session', function($scope, $location, Session) {

  $scope.registration = Session.userRegistration;

  $scope.create = function() {
    $scope.registration.$save().success(function(data, status, headers, config) {
      $location.path('/home');
    });
  };

  $scope.destroy = function() {
    $scope.registration.$destroy();
  };

}]);