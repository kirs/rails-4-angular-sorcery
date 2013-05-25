angular.module('angularDevise.resources').factory('UserSession', ['$http', function($http) {

  var UserSession = function(options) {
    angular.extend(this, options);
  };

  UserSession.prototype.$save = function() {
    return $http.post('/sessions', {
      "email" : this.email,
      "password" : this.password,
      "remember_me" : this.remember_me ? 1 : 0
    });
  };

  UserSession.prototype.$destroy = function() {
    return $http.delete('/sign_out');
  };

  return UserSession;

}]);