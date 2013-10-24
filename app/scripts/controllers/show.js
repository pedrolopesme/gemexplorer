'use strict';

angular.module('gemExplorerApp')
  .controller('ShowCtrl', function ($scope, $location, $routeParams) {

  // RubyGemClient - It's public in order to be injectable by tests.
  $scope.client = $scope.client || new RubyGemsClient();

  // RubyGemClient - It's public in order to be injectable by tests.
  $scope.clipboard = Clipboarder;

	// Search term
	$scope.searchTerm = $routeParams.searchTerm;

	// Gem
	$scope.gem  = $scope.client.findOne($routeParams.gemName);

	// Footer Links
	$scope.links = $scope.gem.getLinks();

	// Copy to clipboard
	$scope.copyGemfile = function() {
		$scope.clipboard.copy($scope.gem.gemfile());
	}	

});