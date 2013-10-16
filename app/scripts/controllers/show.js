'use strict';

angular.module('gemExplorerApp')
  .controller('ShowCtrl', function ($scope, $location, $routeParams) {

  // RubyGemClient - It's public in order to be injectable by tests.
  $scope.client = $scope.client || new RubyGemsClient();

	// Inject params to be used in view
	$scope.searchTerm = $routeParams.searchTerm;
	$scope.gem  			= $scope.client.findOne($routeParams.gemName);

});