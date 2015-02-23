'use strict';

/**
 * @ngdoc function
 * @name yeoanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeoanApp
 */
angular.module('yeoanApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
