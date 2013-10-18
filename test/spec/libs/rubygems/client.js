'use strict';

describe("RubyGems Client", function() {

  var client;

  beforeEach(function () {
    client = new RubyGemsClient();
  });

  afterEach(function(){
    client.curl.get.restore();
  });

  it("should be able to find all gems based on a generic term", function() {

    // Preparing
    var spy_search_url_route  = sinon.spy(client.routes, "searchUrl");
    var apiResponse           = [ {name: "First Gem"}, {name: "Second Gem"} ];
    var stubbed_curl          = sinon.stub(client.curl, "get").returns(apiResponse);

    // Querying
    var response              = client.findAll("My Awesome Gem!");

    // Asserting
    expect(stubbed_curl.called).toBeTruthy();
    expect(spy_search_url_route.calledOnce).toBeTruthy();
    expect(response.length).toEqual(2);
    expect(response[0].get("name")).toEqual(apiResponse[0].name);
    expect(response[1].get("name")).toEqual(apiResponse[1].name);

  });

  it("should be able to get a gem info based on it's name", function() {

    // Preparing
    var stubbed_view_url_route  = sinon.stub(client.routes, "viewUrl");
    var apiResponse             = {name: "First Gem"};
    var stubbed_curl            = sinon.stub(client.curl, "get").returns(apiResponse);

    // Querying
    var response                = client.findOne("My Awesome Gem!");

    // Asserting
    expect(stubbed_curl.called).toBeTruthy();
    expect(stubbed_view_url_route.calledOnce).toBeTruthy();
    expect(response.get("name") ).toEqual(apiResponse.name);

  });
});