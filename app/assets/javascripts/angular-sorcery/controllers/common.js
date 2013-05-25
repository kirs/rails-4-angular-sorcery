//
angular.module('angularDevise.controllers').controller('CommonController', ['$scope', '$location', '$cookieStore', 'Session', 'Settings', function($scope, $location, $cookieStore, Session, Settings) {

  $scope.session = Session;

  $scope.destroy = function() {
    $scope.session.userSession.$destroy()
    .success(function(data, status, headers, config) {
      cookieKey = Settings.sessionCookieKey
      $cookieStore.remove(cookieKey);

      $location.path('/home');
    });
  };

}]);