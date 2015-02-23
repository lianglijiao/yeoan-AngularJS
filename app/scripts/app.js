'use strict';

/**
 * @ngdoc overview
 * @name yeoanApp
 * @description
 * # yeoanApp
 *
 * Main module of the application.
 */
angular
  .module('yeoanApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule'
  ])
  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('ls');
  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/paper', {
        templateUrl: 'views/paper.html',
        controller: 'ExamineCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
