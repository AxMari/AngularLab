angular.module('fizzBuzz')
	   .controller('APIoutPutController', function($scope, externalService){
	   	externalService.then(function(ourData){
	   		$scope.author = ourData.data.author;
	   		$scope.quote = ourData.data.quote;
	   	})
	   	
	   })
	   	.directive("famousQuotes", function(){
	   		return{
	   			restrict: "E",
	   			template: '<h1>"{{quote}}"</h1>',
	   			link: function(scope, elem, attrs){
	   				scope.quote = ourData.data.quote;
	   			}
	   		};
	   })
	    .directive("famousAuthors", function(){
	   		return{
	   			restrict: "E",
	   			template: '<h1>-{{author}}</h1>',
	   			link: function(scope, elem, attrs){
	   				scope.author = ourData.data.author;
	   			}
	   		};
	   	});