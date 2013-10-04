var indexController = function($scope, $location)  {

	$scope.search = function() {
		$location.path('/results/' + $scope.searchTerm);
	}

}