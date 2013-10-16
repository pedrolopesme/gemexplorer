'use strict';

angular.module('gemExplorerApp')
  .controller('SearchCtrl', function ($scope, $location) {

    $scope.search = function() {
			$location.path('/results/' + $scope.searchTerm);
		};

  });
