'use strict';

angular.module('gemExplorerApp')
  .controller('ResultsCtrl', function ($scope, $location, $routeParams) {

    // RubyGemClient - It's public in order to be injectable by tests.
    $scope.client = $scope.client || new RubyGemsClient();

    // Injecting results into scope.
    $scope.searchTerm = $routeParams.searchTerm;
    $scope.foundItems = $scope.client.findAll($scope.searchTerm);
    $scope.totalItems = $scope.foundItems.length;

    /** Return css class according to gem position; */
    $scope.medalizer = function(position){
    	switch(position) {
    		case 0: return "gold";
    		case 1: return "silver";
    		case 2: return "bronze";
    		default: return "others";
    	}
    }


  });