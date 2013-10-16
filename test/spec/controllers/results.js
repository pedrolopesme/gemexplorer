'use strict';

describe('Controller: ResultsCtrl', function () {

  // load the controller's module
  beforeEach(module('gemExplorerApp'));

  var ResultsCtrl,
    fake_scope,
    fake_results, 
    client_stub;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    
    var client        =  new RubyGemsClient();
    var params        = { searchTerm : "search-my-gem" };
    
    fake_scope        = $rootScope.$new();
    fake_scope.client = client;
    fake_results      = [1,2,3,4];

    client_stub       =  sinon.stub(client, "findAll").withArgs(params.searchTerm).returns(fake_results);

    ResultsCtrl = $controller('ResultsCtrl', {
      $scope: fake_scope,
      $routeParams : params
    });

  }));

  it('should find all gems accordingly to a given term', function () {
    expect(fake_scope.searchTerm).toMatch('search-my-gem');
    expect(fake_scope.foundItems).toMatch(fake_results);
    expect(client_stub.called).toBeTruthy();
  });

  it('should count gems found and store it in a scope var', function () {
    expect(fake_scope.totalItems).toMatch(fake_results.length);
  });

});
