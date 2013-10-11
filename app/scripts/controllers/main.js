'use strict';

angular.module('gemExplorerApp')
  .controller('MainCtrl', function ($scope, $location) {

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.search = function() {
			$location.path('/results/' + $scope.searchTerm);
		};

  });
