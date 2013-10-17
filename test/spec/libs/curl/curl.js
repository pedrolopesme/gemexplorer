'use strict';

describe("Curl lib ", function() {

  var curl = Curl;

  it("should not allow more than one XHRFacade instance creation.", function() {

    var first_instance_call   = Curl.getInstance();
    var second_instance_call  = Curl.getInstance();
    expect(first_instance_call).toEqual(second_instance_call);

  });

});