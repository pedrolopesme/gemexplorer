/**
*  A small lib to manipulate clipboard
*
*  Author : Pedro Mendes - @pedrolopesme
*/

var Clipboarder = { 

	message : "",

	/** Returns last message */
	lastMessage : function() {
		return this.message;
	},

	/** Copy to browser's clipboard */
	copy : function(message) {

		var virtualElement = document.createElement('div');
    virtualElement.contentEditable = true;
    document.body.appendChild(virtualElement);
    virtualElement.innerHTML 		= message;
    virtualElement.unselectable = "off";
    virtualElement.focus();
    document.execCommand('SelectAll');
    document.execCommand("Copy", false, null);
    document.body.removeChild(virtualElement);

		this.message = message;
		return true;

	},

	/** Read to browser's clipboard.
			TODO: Find a way to read data directly from browser's clipboard. */
	read : function() {
		return this.lastMessage();
	},

}