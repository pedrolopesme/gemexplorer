/**
*  Consumes RubyGem's awesome API.
*
*  Author : Pedro Mendes - @pedrolopesme
*/
var RubyGemsClient = function (){ 
	
	/** Private: Response formmatter */
	var formatter = Formatter;

	/** Public: Curl client. It's public to allow test injection */
	this.curl 	= Curl;

	/** Public: RubyGem's routes. It's public to allow test injection */
	this.routes = RubyGemsRoutes;

  /** Public : Finds all gems based on given term */
	this.findAll = function(term) {
		var url = this.routes.searchUrl( term );
		return formatter.format( this.curl.get(url) );
	},

	/** Public : Return all information of a gem based on it's name. */
	this.findOne = function(gemName) {
		var url = this.routes.viewUrl(gemName);
		return formatter.format( this.curl.get(url) );
	}

}