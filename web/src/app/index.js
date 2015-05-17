'use strict';

angular.module('web', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'ui.bootstrap', 'satellizer'])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $authProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginCtrl'
      });

      var baseAuthURL = '/api';

    $authProvider.facebook({
      url: baseAuthURL + '/auth/facebook',
      clientId: '624059410963642'
    });

    $authProvider.google({
      url: baseAuthURL + '/auth/google',
      clientId: '631036554609-v5hm2amv4pvico3asfi97f54sc51ji4o.apps.googleusercontent.com'
    });

    $authProvider.twitter({
      url: baseAuthURL + '/auth/twitter'
    });

    $urlRouterProvider.otherwise('/login');
    $locationProvider.html5Mode(true);
  });
