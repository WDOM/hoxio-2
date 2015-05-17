'use strict';

angular.module('web')
  .controller('LoginCtrl', function ($scope, $auth, $stateParams) {

    console.log($stateParams.service);

    $scope.login = function (service) {
      $auth.authenticate(service).then(function (response) {
        // Signed In.
        console.log(response);
      })
      .catch(function(response) {
        console.log(response);
      });
    };
  });
