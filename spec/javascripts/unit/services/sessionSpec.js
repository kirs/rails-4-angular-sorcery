'use strict';

describe("service: Session", function() {

  beforeEach(module('angularSorcery'));

  describe("properties", function() {
    it("should have access to a cookieKey retrieved from the Settings service", inject(function(Session, Settings) {
      expect(cookieKey).toBe(Settings.sessionCookieKey);
    }));

    it("should have a UserSession object containing preset string email/password, and a true 'remember_me' property", inject(function(Session, UserSession) {
      var user_session = Session.userSession; 
      expect(user_session instanceof UserSession).toBe(true);
      expect(user_session.email).toBe("foo@bar.com");
      expect(user_session.password).toBe("example");
      expect(user_session.remember_me).toBe(true);
    }));

    it("should have a UserRegistration object containing preset string properties for email/password/password_confirmation", inject(function(Session, UserRegistration) {
      var user_registration = Session.userRegistration; 
      expect(user_registration instanceof UserRegistration).toBe(true);
      expect(user_registration.email).toMatch(/foo-(\d*)@bar.com/);
      expect(user_registration.password).toBe("example");
      expect(user_registration.password_confirmation).toBe("example");
    }));
    
  });

  describe("functions", function() {
    describe("getCurrentUser", function() {

      it("should exist", inject(function(Session) {
        expect(angular.isFunction(Session.getCurrentUser)).toBe(true);
      }));

      it("should call $cookieStore.get", inject(function(Session, $cookieStore) {
        spyOn($cookieStore, 'get');
        Session.getCurrentUser();
        expect($cookieStore.get).toHaveBeenCalled();
      }));

      it("should get an id from $cookieStore and call User.get(id)", inject(function(Session, User, $cookieStore) {
        spyOn($cookieStore, 'get').andReturn(1);
        spyOn(User, 'get');
        Session.getCurrentUser();
        expect(User.get).toHaveBeenCalledWith({id:1});
      }));

      it("should report that we are signed in if it finds our cookie key", inject(function(Session, $cookieStore) {
        spyOn($cookieStore, 'get').andReturn(1);
        expect(Session.signedIn()).toBe(true);
        expect(Session.signedOut()).toBe(false);
      }));

      it("should report that we are signed out if it doesn't find our cookie key", inject(function(Session, $cookieStore) {
        spyOn($cookieStore, 'get');
        expect(Session.signedIn()).toBe(false);
        expect(Session.signedOut()).toBe(true);
      }));

    });
  });
});
