angular.module('fizzBuzz')
	   .controller('inPutController', function($scope, fizzBuzzService, $location){


	   	$scope.FoB = function(FizzorBuzz){

	   		fizzBuzzService.saveFizzBuzz(FizzorBuzz);
	   		$location.path('/view2');
	   	};












   
});
