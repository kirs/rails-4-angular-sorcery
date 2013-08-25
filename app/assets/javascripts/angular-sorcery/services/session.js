angular.module('angularSorcery.services').service('Session',[ '$cookieStore', 'UserSession', 'UserRegistration', 'Settings', 'User', function($cookieStore, UserSession, UserRegistration, Settings, User) {

  cookieKey = Settings.sessionCookieKey

  this.getCurrentUser = function() {
    var id = $cookieStore.get(cookieKey);
    if (id) {
      return User.get({id: id});
    }
  };
  this.signedIn = function() {
    return !!$cookieStore.get(cookieKey);
  };
  this.signedOut = function() {
    return !this.signedIn();
  };
  this.userSession = new UserSession( { email: "foo@bar.com", password: "example", remember_me: true } );

  this.userRegistration = new UserRegistration( { email: "foo-" + Math.floor((Math.random()*10000)+1) + "@bar.com", password: "example", password_confirmation: "example" } );

}]);