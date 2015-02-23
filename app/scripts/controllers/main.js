'use strict';

/**
 * @ngdoc function
 * @name yeoanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeoanApp
 */
angular.module('yeoanApp')
  .controller('MainCtrl', function ($scope,localStorageService) {

    var awesomeThingsInStore = localStorageService.get('awesomeThings');

    $scope.awesomeThings = awesomeThingsInStore && awesomeThingsInStore.split('\n')||[];
    $scope.$watch('awesomeThings',function(){
      localStorageService.add('awesomeThings',$scope.awesomeThings.join('\n'));
    },true);

    $scope.addItem = function(){
      $scope.awesomeThings.push($scope.awesomeThing);
      $scope.awesomeThing = '';
    };

    $scope.deleteItem = function(index){
      $scope.awesomeThings.splice(index,1);
    };
  });
