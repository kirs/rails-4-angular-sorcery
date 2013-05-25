//
angular.module('angularDevise.controllers').controller('CommonController', ['$scope', '$location', '$cookieStore', 'Session', function($scope, $location, $cookieStore, Session) {

  $scope.session = Session;

  $scope.destroy = function() {
    $scope.session.userSession.$destroy();
  };

}]);