'use strict';

angular.module('gemExplorerApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/results/:searchTerm', {
        templateUrl: 'views/results.html',
        controller: 'ResultsCtrl'
      })
      .when('/show/:searchTerm/:gemName', {
        templateUrl: 'views/show.html',
        controller: 'ShowCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config( function($compileProvider){ 
    $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|chrome-extension):/); 
  });