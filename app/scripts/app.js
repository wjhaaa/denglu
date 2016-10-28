'use strict';
  var abc=""
/**
 * @ngdoc overview
 * @name dengluApp
 * @description
 * # dengluApp
 *
 * Main module of the application.
 */
angular
  .module('dengluApp', ["ui.router","ngCookies"]).controller('con',['$scope','$http',function ($scope,$http) {
	  
	}]).config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider){
			$stateProvider.state('index',{
				url:'/denglu',
				templateUrl:'views/main.html',
				controller:'main'
			}).state('zhuce',{
				url:'/zhuce',
				templateUrl:'views/about.html',
				controller:'about'
			}).state('note',{
				url:'/note',
				templateUrl:'views/note.html',
				controller:'note'
			}).state('suc',{
				url:'/suc',
				templateUrl:'views/success.html',
				controller:'suc'
			})
			$urlRouterProvider.when('','/denglu')
		}])
