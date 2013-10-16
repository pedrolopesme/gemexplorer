'use strict';

describe('Controller: ShowCtrl', function () {

  // load the controller's module
  beforeEach(module('gemExplorerApp'));

  var ShowCtrl,
    fake_scope,
    fake_gem, 
    client_stub;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    
    var client        =  new RubyGemsClient();
    var params        = { searchTerm : "search-my-gem" , gemName : "my-beautiful-gem"};

    fake_scope        = $rootScope.$new();
    fake_scope.client = client;
    fake_gem          = {name: "my beautiful gem"}

    client_stub       =  sinon.stub(client, "findOne").withArgs(params.gemName).returns(fake_gem);

    ShowCtrl = $controller('ShowCtrl', {
      $scope: fake_scope,
      $routeParams : params
    });

  }));

  it('should find all gems accordingly to a given term', function () {
    expect(fake_scope.searchTerm).toMatch('search-my-gem');
    expect(fake_scope.gem).toMatch(fake_gem);
    expect(client_stub.called).toBeTruthy();
  });

});