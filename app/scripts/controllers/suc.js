angular.module('dengluApp')
  .controller('suc',['$scope','$http','$state','$cookies','$cookieStore',function ($scope,$http,$state,$cookies,$cookieStore) {
     $scope.removeCookie = function(){
		  $cookieStore.remove('usernam');
		  $state.go('index')
	  }
  }]);
