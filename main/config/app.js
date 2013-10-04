var app = angular.module('gemExplorer', []);

/** Preventing url sanitization in Chrome */
app.config( function($compileProvider){ 
		$compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|chrome-extension):/); 
});