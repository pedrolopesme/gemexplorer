/**
*  A simple facade to manipulate XHR requests.
*
*  Author : Pedro Mendes - @pedrolopesme
*/

/** XHR Facade  */
var XHRFacade = function() {

	/** Public: Decide if ajax requests should be async or not. */
	this.async = false;

	/** Public: Stores current last request response */
	this.response = {};

	/** Private: Storing current instance in order to avoid scope problems :) */
	var this_instance = this; 

	/** Private: XHR object */
	var xhr = new XMLHttpRequest();

	/** Private: Registers XHR state changes */
	xhr.onreadystatechange = function() {
	  if (xhr.readyState == 4) {
	    this_instance.response = JSON.parse(xhr.responseText);
	  }
	};

	/** Public: Triggers a XHR request */
	this.call_resource = function(url, method) {
		try{
			xhr.open(method, url, this_instance.async);
			xhr.send();
		} catch(err) {
			console.error("Impossible to connect to " + url);
			console.error(err);
		}
		return this_instance.response;
	};

	/** Public: Making a GET request */
	this.get = function(url) {
		return this.call_resource(url, "GET");
	};

	/** Public: Making a POST request */
	this.post = function(url, data) {
		this.setPostData(data);
		return this.call_resource(url, "POST");
	};

	/** Public: Set post headers */
	this.setPostData = function(data) {
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(data);
	}

}