'use strict';

angular.module('gemExplorerApp')
  .controller('SearchCtrl', function ($scope, $location) {

  	$scope.submitform = false;
    
    $scope.loadingIcon = function(){
    	return $scope.submitform;
    };

    $scope.search = function() {
    	$scope.submitform = true;
		$location.path('/results/' + $scope.searchTerm);
	};

  });
