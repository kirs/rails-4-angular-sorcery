angular.module('angularDevise.services').service('Session',[ '$cookieStore', 'UserSession', 'UserRegistration', 'Settings', function($cookieStore, UserSession, UserRegistration, Settings) {

  cookieKey = Settings.sessionCookieKey

  this.currentUser = function(){
    return $cookieStore.get(cookieKey);
  };
  this.signedIn = function() {
    return !!$cookieStore.get(cookieKey);
  };
  this.signedOut = function() {
    return !this.signedIn();
  };
  this.userSession = new UserSession( { email:"foo@bar.com", password:"example", remember_me:true } );

  this.userRegistration = new UserRegistration( { email:"foo-" + Math.floor((Math.random()*10000)+1) + "@bar.com", password:"example", password_confirmation:"example" } );

}]);