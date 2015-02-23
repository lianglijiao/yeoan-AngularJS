'use strict';

/**
 * @ngdoc function
 * @name yeoanApp.controller:ExamineCtrl
 * @description
 * # ExamineCtrl
 * Controller of the yeoanApp
 *
 *
 */

angular.module('yeoanApp')
  .factory('tpls',function(){
  return ['tpl1','tpl2','tpl3','tpl4'];
})

.controller('ExamineCtrl', function ($scope,tpls) {

    var questionModel ={
      xinjianshiti : '新建试题',
      yulanshiti : '预览试题',
      timu : '',
      fenshu :"",
      type:'1',
      options:[]
    };

    $scope.hello = "hello!";

    $scope.nowTime = new Date().valueOf();
    $scope.question = questionModel;
    $scope.templates = tpls;//赋值到$scope中
    $scope.addOption = function(){
      var o = {content:''};
      $scope.question.options.push(o);
    };
    $scope.delOption = function(index){
      $scope.question.options.splice(index,1);
    };
  })

.filter('typeFilter',function(){
  var f = function(input){
    return input == '1'? '单选题':'多选题';
  }
  return f;
})
.directive('fenshuNum',function(){
  return{
    link:function(scope,elements,attrs,controller){
      elements[0].onkeyup = function(){
        if(isNaN(this.value) || this.value <1 || this.value >10)
          this.style.borderColor = 'red';
        else{
          this.style.borderColor = '';
        }
      };
    }
  };
  });
