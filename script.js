angular.module('fizzBuzz', ['ngRoute'])
	   .config(function($routeProvider){
	   		$routeProvider
		   		.when('/',{
		   			controller: 'defaultController',
		   			templateUrl: 'partials/default.html'
		   		})
		   		.when('/FizzBuzz',
		   		{
		   			controller: 'fizzBuzzEntryController',
		   			templateUrl: 'partials/fizzbuzzentryview.html'
		   		})
		   		.when('/FizzBuzzResults',
		   		{
		   			controller: 'fizzBuzzResultController',
		   			templateUrl: 'partials/fizzbuzzresults.html'
		   		})
		   		.when('/Quotes',
		   		{
		   			controller: 'APIoutPutController',
		   			templateUrl: 'partials/famousquotes.html'
		   		})
		   		.when('/error',
		   		{
		   			controller: 'errorController',
		   			templateUrl: 'partials/error.html'
		   		})
		   		.otherwise({ redirectTo: '/error'});
	   });