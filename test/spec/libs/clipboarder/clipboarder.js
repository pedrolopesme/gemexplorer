'use strict';

describe("Clipboarder lib ", function() {

  var clipboarder = Clipboarder;
  var message 	= "I'm on your clipboard"; 

  it("should put a message into clipboard", function() {
    expect(clipboarder.copy(message)).toBeTruthy();
    expect(clipboarder.lastMessage()).toMatch(message);
  });

  it("should retrieve a message from clipboard", function() {
    expect(clipboarder.copy(message)).toBeTruthy();
    expect(clipboarder.read()).toMatch(message);
  });

});