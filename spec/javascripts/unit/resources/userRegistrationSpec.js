'use strict';

describe("resource: UserRegistration", function() {

  beforeEach(module('angularSorcery'));

  describe("UserRegistration instances", function() {
    var userRegistration, postData;

    beforeEach(inject(function(UserRegistration) {
      postData = {
        email:"un@vailable.com",
        password:"password",
        password_confirmation:"password"
      };
      userRegistration = new UserRegistration(postData);
    }));

    it("should have all postData properties that were set on create", function() {
      expect(userRegistration.email).toEqual(postData.email);
      expect(userRegistration.password).toEqual(postData.password);
      expect(userRegistration.password_confirmation).toEqual(postData.password_confirmation);
    });

    describe("UserRegistration.prototype.$save", function() {
      it("should post to /users and return a promise", inject(function($httpBackend, $http) {
        $httpBackend.expectPOST('/users', {user: postData}).respond(200);
        var userReg = userRegistration.$save();
        $httpBackend.flush();
        expect(userReg.success).toBeDefined();
        expect(userReg.error).toBeDefined();
      }));
    });

  });
});
