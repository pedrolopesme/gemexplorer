'use strict';

describe('Controller: ShowCtrl', function () {

  // load the controller's module
  beforeEach(module('gemExplorerApp'));

  var ShowCtrl, fake_scope, client_stub;

  var gem_json  = { name: "my beautiful gem", version: "1" };
  var fake_gem  = new Gem(gem_json);

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    
    var client        =  new RubyGemsClient();
    var params        = { searchTerm : "search-my-gem" , gemName : "my-beautiful-gem"};
    
    client_stub       = sinon.stub(client, "findOne").withArgs(params.gemName).returns(fake_gem);
    fake_scope        = $rootScope.$new();
    fake_scope.client = client;

    ShowCtrl = $controller('ShowCtrl', {
      $scope: fake_scope,
      $routeParams : params
    });

  }));

  it('should find all gems accordingly to a given term', function () {

    expect(fake_scope.searchTerm).toMatch('search-my-gem');
    expect(fake_scope.gem.get('name')).toMatch(gem_json.get);
    expect(client_stub.called).toBeTruthy();

  });

  it('should copy gemfile command to clipboard', function () {

    // Preparing 
    var clipboard_stub = sinon.stub(fake_scope.clipboard, "copy").withArgs(fake_scope.gem.gemfile());

    // Acting
    fake_scope.copyGemfile();

    // Asserting
    expect(clipboard_stub.called).toBeTruthy();

    // Restoring singleton properties - other test will like it. :-)
    fake_scope.clipboard.copy.restore();

  });

});