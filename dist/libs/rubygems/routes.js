/**
*  Simple static (and singleton) object responsible for
*  build urls based on RubyGem's API. 
*/
var RubyGemsRoutes = {

	/** API's base url */
	apiUrl : "https://rubygems.org/api/v1",

 	/** Making all sort of concatenation */
	buildUrl : function( prefix, param, suffix ) {
		var url = this.apiUrl + prefix;
		if (param != undefined) 	url = url + param;
		if (suffix != undefined) 	url = url + suffix;
		return url;
	},

	/** Return general search URL */
	searchUrl: function(query) {
		return this.buildUrl("/search.json?query=", query);
	},

	/** Return gem's view URL */
	viewUrl : function(gemName) {
		return this.buildUrl("/gems/", gemName, ".json");
	}

}