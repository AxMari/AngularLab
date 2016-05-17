angular.module('fizzBuzz')
	   .controller('defaultController', function($scope, fizzBuzzService){


	   })
	   .directive("welcomeTo", function(){
	   		return{
	   			restrict: "E",
	   			template: '<h1>Welcome</h1>',
	   			replace: false
	   		};

	   });