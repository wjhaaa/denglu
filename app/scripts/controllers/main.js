'use strict';

/**
 * @ngdoc function
 * @name dengluApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dengluApp
 */
angular.module('dengluApp')
  .controller('main',['$scope','$http','$state','$cookies','$cookieStore',function ($scope,$http,$state,$cookies,$cookieStore) {
     if($cookies.get('usernam',$scope.updata)){
		$state.go('note')
	}
     $scope.denglu=function(){
     	$http({
		url:"http://www.somenote.cn:1510/users/login",
		method:"post",
		data:$scope.updata
	}).success(function(e){
//		debugger 	
       $cookieStore.put("uid",e.uid)
       $state.go('note')
       	if($scope.check==true){
				$cookieStore.put("usernam",$scope.updata);				
				var expireDate = new Date();
				expireDate.setDate(expireDate.getDate() + 6);
				// Setting a cookie
				$cookies.put('usernam', $scope.updata, {'expires': expireDate});
	  }
       	
	
	})
     }
  }]);

