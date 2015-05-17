'use strict';

describe('controllers', function(){
  var scope;

  beforeEach(module('web'));

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should validate the set up', inject(function() {
    expect(true).toBeTruthy();
  }));
});
