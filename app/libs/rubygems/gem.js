/**
*  Encasulates a gem retrieved from RubyGem's API in a class
*  with it's common operations.
*
*  Author : Pedro Mendes - @pedrolopesme
*/

var Gem = function(json) {

	/* Private method - check if gem's attr has value */
	var notEmpty = function(attr) {
		
		// Is Undefined
		if( typeof(json[attr]) == "undefined" )
			return false;

		// Is Null
		if( json[attr] == null )
			return false;

		// Is Empty String
		if( typeof(json[attr]) == "string" && json[attr].replace(/^\s+|\s+$/g, '') == "")
			return false;

		return true;
	}

	/** Generic getter */
	this.get = function(attr) {
		return json[attr];
	}

	/** Gem install command */
	this.gemInstall = function() {
		return "gem install " + this.get("name");
	}

	/** Gemfile command */
	this.gemfile = function() {
		return "gem \"" + this.get("name") + "\", \"~> " + this.get("version") +  "\"";
	}

	/** Returns an array with all useful links */
	this.getLinks = function(){
		var links = new Array();
		if( notEmpty("project_uri") ) 			links.push({name: "rubygems", url : this.get("project_uri")});
    if( notEmpty("homepage_uri") ) 			links.push({name: "homepage", url : this.get("homepage_uri")});
    if( notEmpty("source_code_uri") ) 	links.push({name: "source code", url : this.get("source_code_uri")});
    if( notEmpty("documentation_uri") ) links.push({name: "docs", url : this.get("documentation_uri")});
    if( notEmpty("wiki_uri") ) 					links.push({name: "wiki", url : this.get("wiki_uri")});
    return links;
	}

}