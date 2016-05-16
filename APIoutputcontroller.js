angular.module('fizzBuzz')
	   .controller('APIoutPutController', function($scope, externalService){
	   	externalService.then(function(ourData){
	   		$scope.author = ourData.data.author;
	   		$scope.quote = ourData.data.quote;
	   	})
	   	
	   });