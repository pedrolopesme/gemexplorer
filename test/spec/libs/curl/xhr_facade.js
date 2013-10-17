'use strict';

describe("XHRFacade lib", function() {

  var xhrFacade,
  		callResourceStub;

  beforeEach(function () {
  	xhrFacade  				= new XHRFacade();
  	callResourceStub 	= sinon.stub(xhrFacade, "call_resource");
  	callResourceStub.withArgs("/test", "GET").returns("get");
  	callResourceStub.withArgs("/test", "POST").returns("post");
  });

  it("should make a get request on remote server when get method was called.", function() {
    expect(xhrFacade.get("/test")).toEqual("get");
    expect(callResourceStub.calledOnce).toBeTruthy();
  });

  it("should make a post request on remote server when post method was called.", function() {
    xhrFacade.setPostData = function(){};
    expect(xhrFacade.post("/test", {data: "whatever"})).toEqual("post");
    expect(callResourceStub.calledOnce).toBeTruthy();
  });

});