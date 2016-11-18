var app = angular.module('app', ['ngRoute', 'ngCookies']);

app.config(function($routeProvider){
	$routeProvider
	.when('/index', {
		templateUrl: 'partials/login.html'
	})
	.when('/msgboard',{
		templateUrl: 'partials/msgboard.html'
	})
	.when('/new_question',{
		templateUrl: 'partials/new_question.html'
	})
	.when('/question/:id',{
		templateUrl: 'partials/showquestion.html'
	})
	.when('/question/:id/new_answer',{
		templateUrl: 'partials/newanswer.html'
	})
	.otherwise({
		redirectTo: '/index'
	});
});