angular.module('fizzBuzz', ['ngRoute'])
	   .config(function($routeProvider){
	   		$routeProvider
		   		.when('/',
		   		{
		   			controller: 'inPutController',
		   			templateUrl: 'partials/view1.html'
		   		})
		   		.when('/view2',
		   		{
		   			controller: 'outPutController',
		   			templateUrl: 'partials/view2.html'
		   		})
		   		.when('/error',
		   		{
		   			controller: 'inPutController',
		   			templateUrl: 'partials/error.html'
		   		})
		   		.otherwise({ redirectTo: '/error'});
	   });