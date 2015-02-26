'use strict';

/* Controllers */

var shopApp = angular.module('shopControllers', []);

shopControllers.controller('ShopListCtrl',['$scope', 'Shop',
	function($scope, Shop){
		$scope.shops = Shop.query();
	}]);
