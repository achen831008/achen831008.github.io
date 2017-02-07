angular.module('myApp.controllers',['ngRoute'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
        .when('/experience', {
                templateUrl : 'views/experience.html',
                controller  : 'experienceController'
        });
	}])

	.controller('mainController', ['$scope', function($scope) {
        var vm = this;
        $scope.experience = [{
        	job_title: 'Software Engineering',
        	company: 'DBRS Limited',
        	location: 'Toronto, Ontario, Canada',
        	mapUrl: 'http://maps.google.com/?q=181 University Avenue, Toronto, Ontario, Canada',
        	logo: '/assets/img/DBRS_logo.svg',
        	description: {'To Be Determined'}
        }, {

        }, {

        }, {

        }];
    }]);
