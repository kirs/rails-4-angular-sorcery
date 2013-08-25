'use strict';

describe("resource: UserSession", function() {

  beforeEach(module('angularSorcery'));

  var postData, userSession, SettingsSvc;

  beforeEach(inject(function(UserSession, Settings){
    SettingsSvc = Settings;
    postData = {email:"un@vailable.com", password:"password", remember_me:1};
    userSession = new UserSession(postData);
  }));

  it("should have a cookieKey retrieved from the Settings service", function() {
    expect(cookieKey).toBe(SettingsSvc.sessionCookieKey);
  });

  it("should have email, password and remember_me properties that were set on create", function() {
    expect(userSession.email).toEqual(postData.email);
    expect(userSession.password).toEqual(postData.password);
    expect(userSession.remember_me).toEqual(postData.remember_me);
  });

  describe("cookieStore on http requests", function() {
    var httpBackend, cookieStore;
    beforeEach(inject(function($httpBackend, $cookieStore) {
      httpBackend = $httpBackend;
      cookieStore = $cookieStore;
    }));

    describe("UserSession.prototype.$save", function() {
      it("should call $cookiestore.put({cookieKey: id}) on success", function() {
        httpBackend.expectPOST('/sessions', postData).respond({id:1});
        spyOn(cookieStore, 'put');
        userSession.$save();
        httpBackend.flush();
        expect(cookieStore.put).toHaveBeenCalledWith(cookieKey, 1);
      });
    });

    describe("UserSession.prototype.$destroy", function() {
      it("should call $cookiestore.remove(cookieKey) on success", inject(function($httpBackend, $cookieStore) {
        httpBackend.expectDELETE('/sign_out').respond(200);
        spyOn(cookieStore, 'remove');
        userSession.$destroy();
        httpBackend.flush();
        expect(cookieStore.remove).toHaveBeenCalledWith(cookieKey);
      }));
  });

  });
});
