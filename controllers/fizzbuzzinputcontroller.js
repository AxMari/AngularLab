angular.module('fizzBuzz')
	   .controller('fizzBuzzEntryController', function($scope, fizzBuzzService, $location){


	   	$scope.FoB = function(FizzorBuzz){

	   		fizzBuzzService.saveFizzBuzz(FizzorBuzz);
	   		$location.path('/FizzBuzzResults');
	   	};
   
});
