angular.module('fizzBuzz')
	   .factory('fizzBuzzService', function(){
	   	var FizzorBuzz = {};

	   	return {
	   		saveFizzBuzz: function(fbObj){
	   			FizzorBuzz = fbObj;
	   			
	   		},

	   		giveAnswer: function(){
		   		if (!isNaN(FizzorBuzz)){	
					if (FizzorBuzz % 3 === 0 && FizzorBuzz % 5 === 0){			
						return "FizzBuzz";
					}else if (FizzorBuzz % 3 === 0){
						return "Buzz";
					}else if (FizzorBuzz % 5 === 0){
						return "Fizz";
					}else{
						return FizzorBuzz
					}
		   			
		   		}else{
		   			return "Not a number!";
		   		}
		   	}
	   	}
	});


	   