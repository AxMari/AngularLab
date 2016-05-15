angular.module('fizzBuzz')
	   .factory('fizzBuzzService', function(){
	   	var FizzorBuzz = {};

	   	return {
	   		saveFizzBuzz: function(fbObj){
	   			FizzorBuzz = fbObj;
	   			
	   		},

	   		giveAnswer: function(){
	   			return FizzorBuzz;
	   			
	   		}


	   	}



	});