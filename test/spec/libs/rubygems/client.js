'use strict';

describe("RubyGems Client", function() {

  var client        = new RubyGemsClient();
  var stubbed_curl  = sinon.stub(client.curl, "get").returns("Request stubbed!");

  it("should be able to search for a generic term", function() {
    var spy_search_url_route  = sinon.spy(client.routes, "searchUrl");
    expect(client.findAll("My Awesome Gem!") ).toEqual("Request stubbed!");
    expect(stubbed_curl.called).toBeTruthy();
    expect(spy_search_url_route.calledOnce).toBeTruthy();
  });

  it("should be able to get a gem info based on it's name", function() {
    var stubbed_view_url_route = sinon.stub(client.routes, "viewUrl");
    expect(client.findOne("My Awesome Gem!") ).toEqual("Request stubbed!");
    expect(stubbed_curl.called).toBeTruthy();
    expect(stubbed_view_url_route.calledOnce).toBeTruthy();
  });

});

