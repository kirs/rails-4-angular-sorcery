angular.module('angularDevise.resources').factory('UserSession', ['$http', '$cookieStore', 'Settings', function($http, $cookieStore, Settings) {

  var cookieKey = Settings.sessionCookieKey

  var UserSession = function(options) {
    angular.extend(this, options);
  };

  UserSession.prototype.$save = function() {
    return $http.post('/sessions', {
      "email" : this.email,
      "password" : this.password,
      "remember_me" : this.remember_me ? 1 : 0
    }).success(function(data, status, headers, config) {
      // Session.user = new User(data)
      $cookieStore.put(cookieKey, data.id);
    });
  };

  UserSession.prototype.$destroy = function() {
    return $http.delete('/sign_out').success(function(data, status, headers, config) {
      cookieKey = Settings.sessionCookieKey;
      $cookieStore.remove(cookieKey);
    });
  };

  return UserSession;

}]);