'use strict';

describe("service: Settings", function() {

  beforeEach(module('angularSorcery'));

  describe("properties", function() {
    it("should have a non-empty string sessionCookieKey", inject(function(Settings) {
      expect(Settings.sessionCookieKey.constructor).toBe(String);
      expect(Settings.sessionCookieKey).toNotEqual("");
    }));
  });

});
