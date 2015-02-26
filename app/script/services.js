'use strict';

/* Services */

var shopServices = angular.module('shopServices', ['ngResource']);

shopServices.factory('Shop', ['$resource',
	function($resource){
		return $resource('shops/:shopId.json', {}, {
			query:{method:'GET', params:{shopId:'shops'}, isArray:true}
		});
	}]);
