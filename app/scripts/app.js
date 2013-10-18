'use strict';

angular.module('gemExplorerApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl'
      })
      .when('/results/:searchTerm', {
        templateUrl: 'views/results.html',
        controller: 'ResultsCtrl'
      })
      .when('/show/:searchTerm/:gemName', {
        templateUrl: 'views/show.html',
        controller: 'ShowCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config( function($compileProvider){ 
    $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|chrome-extension|javascript):/); 
  });