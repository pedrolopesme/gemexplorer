'use strict';

angular.module('gemExplorerApp')
  .controller('ShowCtrl', function ($scope, $location, $routeParams) {

	// Private : RubyGemClient
	var client = new RubyGemsClient();

	// Inject params to be used in view
	$scope.searchTerm = $routeParams.searchTerm;
	$scope.gem = client.findOne($routeParams.gemName);

});