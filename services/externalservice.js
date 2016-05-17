angular.module("fizzBuzz") //referencing a module, already created, called reddit
	   .factory("externalService", function($http){ //creating a service (factory is function); $http is another service that is part of angular framework
		  return $http.post("https://andruxnet-random-famous-quotes.p.mashape.com/", {}, 
		  	{
		  		headers: {
		  			"X-Mashape-Key": "6bSNHwlY4kmshhCLP4W1lbc71tNcp1m7RSRjsncp1oqQNUtIKP",
    				"Content-Type": "application/x-www-form-urlencoded",
    				"Accept": "application/json"
		  		}
		  	});

		});

