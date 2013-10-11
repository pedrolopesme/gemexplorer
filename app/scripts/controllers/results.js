'use strict';

angular.module('gemExplorerApp')
  .controller('ResultsCtrl', function ($scope, $location, $routeParams) {

    // Private : RubyGemClient
    var client = new RubyGemsClient();

    // Injecting results into global scope.
    $scope.searchTerm = $routeParams.searchTerm;
    $scope.foundItems = client.findAll($scope.searchTerm);

  });