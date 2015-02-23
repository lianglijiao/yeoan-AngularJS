'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('yeoanApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should have no items to start', function () {
    expect(scope.awesomeThings.length).toBe(0);
  });

  it('should add items to the list', function () {
    scope.awesomeThing = 'Test 1';
    scope.addItem();
    expect(scope.awesomeThings.length).toBe(1);
  });

  it('should add then remove an item from the list', function () {
    scope.awesomeThing = 'Test 1';
    scope.addItem();
    scope.deleteItem(0);
    expect(scope.awesomeThings.length).toBe(0);
  });
});
