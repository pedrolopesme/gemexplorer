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

  it("should generate an empty array with all gem's links when none links are filled", function() {

    // Preparing
    delete gemJson["project_uri"];
    delete gemJson["homepage_uri"];
    delete gemJson["source_code_uri"];
    delete gemJson["documentation_uri"];
    delete gemJson["wiki_uri"];
    gemObject = new Gem(gemJson);

    // Aserting
    expect(gemObject.getLinks().length).toBe(0);

  });

  it("should generate an array with all gem's links when all links are filled", function() {

    // Preparing
    gemJson["project_uri"]       = "http://rubygems"; 
    gemJson["homepage_uri"]      = "http://homepage";
    gemJson["source_code_uri"]   = "http://source-code";
    gemJson["documentation_uri"] = "http://docs";
    gemJson["wiki_uri"]          = "http://wiki";
    gemObject = new Gem(gemJson);

    var expected_links = new Array();
    expected_links.push({name: "rubygems", url : "http://rubygems"});
    expected_links.push({name: "homepage", url : "http://homepage"});
    expected_links.push({name: "source code", url : "http://source-code"});
    expected_links.push({name: "docs", url : "http://docs"});
    expected_links.push({name: "wiki", url : "http://wiki"});

    // Aserting
    expect(gemObject.getLinks().length).toBe(expected_links.length);
    expect(gemObject.getLinks()[0].name).toBe(expected_links[0].name);
    expect(gemObject.getLinks()[1].name).toBe(expected_links[1].name);
    expect(gemObject.getLinks()[2].name).toBe(expected_links[2].name);
    expect(gemObject.getLinks()[3].name).toBe(expected_links[3].name);
    expect(gemObject.getLinks()[4].name).toBe(expected_links[4].name);
  });

  it("should generate an array with some gem's links when some links are filled", function() {

    // Preparing
    gemJson["project_uri"]       = "http://rubygems"; 
    gemJson["source_code_uri"]   = "http://source-code";
    gemJson["wiki_uri"]          = "http://wiki";
    gemObject = new Gem(gemJson);

    var expected_links = new Array();
    expected_links.push({name: "rubygems", url : "http://rubygems"});
    expected_links.push({name: "source code", url : "http://source-code"});
    expected_links.push({name: "wiki", url : "http://wiki"});

    // Aserting
    expect(gemObject.getLinks().length).toBe(3);
    expect(gemObject.getLinks()[0].name).toBe(expected_links[0].name);
    expect(gemObject.getLinks()[1].name).toBe(expected_links[1].name);
    expect(gemObject.getLinks()[2].name).toBe(expected_links[2].name);

  });

});