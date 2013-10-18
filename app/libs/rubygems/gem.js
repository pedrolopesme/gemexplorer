/**
*  Encasulates a gem retrieved from RubyGem's API in a class
*  with it's common operations.
*
*  Author : Pedro Mendes - @pedrolopesme
*/

var Gem = function(json) {

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

}