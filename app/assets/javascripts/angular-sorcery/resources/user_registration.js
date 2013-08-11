angular.module('angularSorcery.resources').factory('UserRegistration', ['$http', function($http) {

  var UserRegistration = function(options) {
    angular.extend(this, options);
  };

  UserRegistration.prototype.$save = function() {
    return $http.post('/users', {
      "user" : {
        "email" : this.email,
        "password" : this.password,
        "password_confirmation" : this.password_confirmation
      }
    });
  };

  return UserRegistration;

}]);
