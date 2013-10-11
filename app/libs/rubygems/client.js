/**
*  Consumes RubyGem's awesome API.
*/
var RubyGemsClient = function (){ 
	
	/** Public: making curl client and routes public, 
	*  in order to allow test injection */
	this.curl 	= new Curl();
	this.routes = RubyGemsRoutes;

  /** Public : Finds all gems based on given term */
	this.findAll = function(term) {
		var url = this.routes.searchUrl( term );
		return this.curl.get(url);
	},

	/** Public : Return all information of a gem based on it's name. */
	this.findOne = function(gemName) {
		var url = this.routes.viewUrl(gemName);
		return this.curl.get(url);
	}

}