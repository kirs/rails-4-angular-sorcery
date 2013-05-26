angular.module('angularDevise.controllers').controller('CommonController', ['$scope', '$location', 'Session', function($scope, $location, Session) {
  $scope.session = Session;

  $scope.destroy = function() {
    $scope.session.userSession.$destroy()
    .success(function(data, status, headers, config) {
      $location.path('/home');
    });
  };

}]);
