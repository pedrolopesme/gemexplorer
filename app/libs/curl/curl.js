/**
*  A simple facade to manipulate XHR requests.
*
*  Author : Pedro Mendes - @pedrolopesme
*/

/** XHR Facade  */
var XHRFacade = function() {

	/** Public: Stores current last request response */
	this.response = {};

	/** Private: Storing current instance in order to avoid scope problems :) */
	var curl_instance = this; 

	/** Private: XHR object */
	var xhr = new XMLHttpRequest();

	/** Private: Registers XHR state changes */
	xhr.onreadystatechange = function() {
	  if (xhr.readyState == 4) {
	    curl_instance.response = JSON.parse(xhr.responseText);
	  }
	};

	/** Private: Triggers a XHR request */
	var call_resource = function(url, method) {
		try{
			xhr.open(method, url, false);
			xhr.send();
		} catch(err) {
			console.error("Impossible to connect to " + url);
			console.error(err);
		}
		return curl_instance.response;
	};

	/** Public: Making a GET request */
	this.get = function(url) {
		return call_resource(url, "GET");
	};

	/** Public: Making a POST request */
	this.post = function(url, data) {
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(data);
		return call_resource(url, "POST");
	};

}

/** Curl object - in fact, a XHRFacade creator. */
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
		return this.getInstance().get(url, data);
	}

}