'use strict';

describe("Formatter lib ", function() {

  var formatter = Formatter;

  it("should format a single gem.", function() {
    var gem = {name: "First Gem"};
    expect(formatter.format(gem).get("name")).toEqual(gem.name);
  });

  it("should format an array of gems.", function() {
    var gems = [{name: "First Gem"}, {name: "Second Gem"}, {name: "Third Gem"}];
    expect(formatter.format(gems).length).toEqual(3);
    expect(formatter.format(gems)[0].get("name")).toEqual(gems[0].name);
    expect(formatter.format(gems)[1].get("name")).toEqual(gems[1].name);
    expect(formatter.format(gems)[2].get("name")).toEqual(gems[2].name);
  });

  it("shouldn't forma anything in case of a empty array.", function() {
    var gems = [];
    expect(formatter.format(gems).length).toEqual(0);
    expect(formatter.format(gems)).toEqual([]);
  });

});