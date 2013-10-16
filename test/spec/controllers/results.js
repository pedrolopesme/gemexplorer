'use strict';

describe('Controller: ResultsCtrl', function () {

  // load the controller's module
  beforeEach(module('gemExplorerApp'));

  var ResultsCtrl,
    fake_scope, 
    client_stub;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    
    var client        =  new RubyGemsClient();
    var params        = { searchTerm : "search-my-gem" };
    
    fake_scope        = $rootScope.$new();
    fake_scope.client = client;

    client_stub       =  sinon.stub(client, "findAll").withArgs(params.searchTerm).returns("my-beautiful-gem");

    ResultsCtrl = $controller('ResultsCtrl', {
      $scope: fake_scope,
      $routeParams : params
    });

  }));

  it('should find all gems accordingly to a given term', function () {
    expect(fake_scope.searchTerm).toMatch('search-my-gem');
    expect(fake_scope.foundItems).toMatch('my-beautiful-gem');
    expect(client_stub.called).toBeTruthy();
  });

});
