'use strict';

describe('Controller: SearchCtrl', function () {

  // load the controller's module
  beforeEach(module('gemExplorerApp'));

  var MainCtrl,
    fake_scope,
    fake_location;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    
    fake_scope = $rootScope.$new();
    fake_scope.searchTerm = "search-my-gem";
    fake_location = { path : function(){ return null; } }

    MainCtrl = $controller('SearchCtrl', {
      $scope: fake_scope,
      $location : fake_location
    });

  }));

  it('should redirect to a results page when a search was maked', function () {
    var spy_location  = sinon.spy(fake_location, "path");
    fake_scope.search();
    expect(spy_location.calledOnce).toBeTruthy();
    expect(spy_location.calledWith('/results/search-my-gem')).toBeTruthy();
  });

});
