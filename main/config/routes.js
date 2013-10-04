app.config(function($routeProvider) {
  $routeProvider.
    when('/',               {controller:indexController,    templateUrl:'views/index.html'}).
    when('/results/:searchTerm', {controller:resultsController,  templateUrl:'views/results.html'}).
    when('/show/:searchTerm/:gemName',    {controller:showController,   templateUrl:'views/show.html'}).
    otherwise({redirectTo:'/'});
});