'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// Home state routing
		$stateProvider.
		state('eviction', {
			url: '/eviction',
			templateUrl: 'modules/core/views/eviction.client.view.html'
		}).
		state('deposit', {
			url: '/deposit',
			templateUrl: 'modules/core/views/deposit.client.view.html'
		}).
		state('housing', {
			url: '/housing',
			templateUrl: 'modules/core/views/housing.client.view.html'
		}).
		state('home', {
			url: '/',
			templateUrl: 'modules/core/views/home.client.view.html'
		});
	}
]);