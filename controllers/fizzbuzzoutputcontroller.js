angular.module('fizzBuzz')
	   .controller('fizzBuzzResultController', function($scope, fizzBuzzService){
	   		$scope.fbObj = fizzBuzzService.giveAnswer();
	   		});



	   