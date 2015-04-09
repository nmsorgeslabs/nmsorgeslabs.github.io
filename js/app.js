// Configure APP

var nmsioApp = angular
		.module('NMSioApp', [ 'ngRoute', 'NMSioApp.controllers' ]);

// Configure routing

nmsioApp.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'partials/landing.html',
		controller : 'nmsioController'
	}).
      when('/project/:projectName', {
        templateUrl: 'partials/project.html',
        controller: 'nmsioController'
      });
} ]);