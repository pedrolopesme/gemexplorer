'use strict';

describe("Gem object", function() {

  var gemObject, gemJson;

  beforeEach(function () {
    gemJson           = { name: "My Beautiful Gem", version: "1.0.2.3b" };
  	gemObject  				= new Gem(gemJson);
  });

  it("should be able to retrieve a property from the given json", function() {
    expect(gemObject.get("name")).toMatch(gemJson.name);
  });

  it("shouldn't be able to retrieve a nonexistent property in the given json", function() {
    expect(gemObject.get("whatever")).toMatch(undefined);
  });

  it("should format a gem install command", function() {
    expect(gemObject.gemInstall()).toMatch("gem install " + gemJson.name);
  });

  it("should format a gemfile command", function() {
    expect(gemObject.gemfile()).toMatch("gem \"" + gemJson.name + "\", \"~> " + gemJson.version +  "\"" );
  });

});