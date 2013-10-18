/**
*  Encasulates a gem retrieved from RubyGem's API in a class
*  with it's common operations.
*
*  Author : Pedro Mendes - @pedrolopesme
*/

var Gem = function(json) {

	
	
	/** Reads gems properties */
	this.get = function(attr) {
		return json[attr];
	}

}