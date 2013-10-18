'use strict';

describe("Gem object", function() {

  var gemObject, gemJson;

  beforeEach(function () {
    gemJson           = { name: "My Beautiful Gem" };
  	gemObject  				= new Gem(gemJson);
  });

  it("should be able to retrieve a property from the given json", function() {
    expect(gemObject.get("name")).toMatch(gemJson.name);
  });

  it("shouldn't be able to retrieve a nonexistent property in the given json", function() {
    expect(gemObject.get("whatever")).toMatch(undefined);
  });

  it("shouldn't be able to retrieve a nonexistent property in the given json", function() {
    expect(gemObject.get("whatever")).toMatch(undefined);
  });

});