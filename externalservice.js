angular.module("fizzBuzz") //referencing a module, already created, called reddit
	   .factory("instaService", function($http){ //creating a service (factory is function); $http is another service that is part of angular framework

	var instaGram = ""; //creating var with empty string
	function getInsta(){ //creating function called getReddit
		return $http.get("https://api.instagram.com/v1/tags/nofilter/media/recent?access_token=detroit"); //get data that is at json link and returns it; subReddit refers to var in line 5
		//this function is returning an object/json 
	}


	return {
		instaHashtag: function(hashtag){
			//choose SubReddit function is created here
			//whatever is passed is the vlue of subReddit
			instaGram = hashtag;
		},

		getInsta: getInsta

	};

});
