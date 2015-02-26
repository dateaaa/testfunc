'use strict';

/* App Module */

var shopApp = angular.module('shopApp', [
	'ngRoute',
	'shopControllers',
	'shopServices'
]);

shopApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/shops', {
				templateUrl:'view/shop-list.html',
				controller:'ShopListCtrl'
			}).
			otherwise({
				redirectTO: '/shops'
			});
	}]);