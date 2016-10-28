angular.module('dengluApp')
  .controller('note',['$scope','$http','$state','$cookies','$cookieStore',function ($scope,$http,$state,$cookies,$cookieStore) {
     	var num=0;
     	var qwe=$cookieStore.get('uid')
	    $scope.adddata={"uid":qwe}
     	$scope.edit=function(e){
		     $scope.editdata=e
	   }
     $scope.save=function(){
		$http({
			url:"http://www.somenote.cn:1510/item",
			method:"PUT",
			data:$scope.editdata
		}).success(function(){
			
		})
	}
     $scope.add=function(){
     	
		$http({
			url:"http://www.somenote.cn:1510/item",
			method:"POST",
			data:$scope.adddata
		}).success(function(e){
			debugger
			$scope.data.push($scope.adddata)
		})
	} 
	$scope.del=function(e){
		$http({
			url:'http://www.somenote.cn:1510/item/'+e.id,
			method:"delete"
		}).success(function(){
			$scope.data.splice($scope.data.indexOf(e),1)
		})
	}
	$scope.next=function(){
		num+=10;
		$http({
			url:"http://www.somenote.cn:1510/item",
			method:"GET",
			params:{"$skip":num,"$limit":10}
		}).success(function(e){
			$scope.data=e
		})
	}
	$scope.pre=function(){
		num-=10;
		$http({
			url:"http://www.somenote.cn:1510/item",
			method:"GET",
			params:{"$skip":num,"$limit":10}
		}).success(function(e){
			$scope.data=e
		})
	}

    $http({
		url:"http://www.somenote.cn:1510/item",
		method:"get",
		params:{"$skip":num,"$limit":10,"uid":$cookieStore.get('uid')}
		
	}).success(function(e){
		$scope.data=e
		
	})

  }]);
