'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
		
		$scope.alerts = [
			{
				icon:'glyphicon-user',
				color:'btn-success',
				total:'20,408',
				description:'TOTAL CUSTOMERS'	
			},
			{
				icon:'glyphicon-calendar',
				color:'btn-warning',
				total:'20,132',
				description:'UPCOMING EVENTS'	
			},
			{
				icon:'glyphicon-edit',
				color:'btn-info',
				total:'15,154',
				description:'NEW CUSTOMERS'	
			},
			{
				icon:'glyphicon-record',
				color:'btn-primary',
				total:'32,458',
				description:'EMAILS SENT'	
			},
			{
				icon:'glyphicon-record',
				color:'btn-danger',
				total:'5015',
				description:'FOLLOW UP REQUIRED'	
			},
			{
				icon:'glyphicon-flag',
				color:'btn-warning',
				total:'35,145',
				description:'REFERRALS TO MODERATE'	
			},
		]
	}
]);