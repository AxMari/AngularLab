angular.module('fizzBuzz')
	   .controller('outPutController', function($scope, fizzBuzzService, $location){
	   		$scope.fbObj = fizzBuzzService.giveAnswer();
	   		});



	   