/**
*  Encapsulating and controlling XHR facade creation.
*
*  Author : Pedro Mendes - @pedrolopesme
*/

var Curl = {

	instance : undefined,

	/* Keeping only one instance of XHRFacade. */
	getInstance : function() {
		this.instance = this.instance || new XHRFacade();
		return this.instance;
	},

	get : function(url) {
		return this.getInstance().get(url);
	}, 

	post : function(url, data) {
		return this.getInstance().post(url, data);
	}

}