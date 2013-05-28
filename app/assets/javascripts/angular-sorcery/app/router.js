App.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {template: window.JST['home'], controller: 'MainController'});
  $routeProvider.when('/users_list', {template: window.JST['users'], controller: 'UsersController'});
  $routeProvider.when('/profile', {template: window.JST['profile'], controller: 'ProfileController'});
  $routeProvider.when('/register', {template: window.JST['registrations/new'], controller: 'RegistrationsController'});
  $routeProvider.when('/login', {template: window.JST['sessions/new'], controller: 'SessionsController'});
  $routeProvider.when('/logout', {template: window.JST['sessions/destroy'], controller: 'SessionsController'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
