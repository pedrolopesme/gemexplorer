'use strict';

angular.module('gemExplorerApp')
  .controller('ResultsCtrl', function ($scope, $location, $routeParams) {

    // RubyGemClient - It's public in order to be injectable by tests.
    $scope.client = $scope.client || new RubyGemsClient();

    // Injecting results into global scope.
    $scope.searchTerm = $routeParams.searchTerm;
    $scope.foundItems = $scope.client.findAll($scope.searchTerm);

  });