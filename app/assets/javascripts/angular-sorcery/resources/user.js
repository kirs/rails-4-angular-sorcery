angular.module('angularDevise.resources').factory('User', ['$resource', function($resource) {
  return $resource('/users/:id', {id: '@id'});
}]);
