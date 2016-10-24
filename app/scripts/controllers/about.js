'use strict';

/**
 * @ngdoc function
 * @name dengluApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dengluApp
 */
angular.module('dengluApp')
  .controller('about', ['$scope','$http','$state',function ($scope,$http,$state) {
     $scope.zhuce=function(){
     	$http({
		url:"http://www.somenote.cn:1510/users",
		method:"post",
		data:$scope.updata
	}).success(function(e){
//		debugger
        $state.go('index')		
	})
     }
  }]);
