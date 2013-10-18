/**
*  Encapsulates curl responses in Gem instances
*
*  Author : Pedro Mendes - @pedrolopesme
*/
var Formatter = {

	/** Default empty response  */
	defaultEmptyResponse : [],

	/** Encapsulate gems found into Gem object */
	format : function(response) {

		if(Object.prototype.toString.call(response) === '[object Array]')
			return this.formatArray(response);

		if(Object.prototype.toString.call(response) === '[object Object]')
			return this.formatJson(response);

		return this.defaultEmptyResponse;

	},

	/** Encapsulate a single gem  */
	formatJson : function(json) {
		return new Gem(json);
	},

	/** Encapsulate an array of gems  */
	formatArray : function(array) {

		if(array.length == 0) return this.defaultEmptyResponse;

		var response = [];
		for(index in array) { 
			response.push(this.formatJson(array[index]));
		}

		return response;

	}
}