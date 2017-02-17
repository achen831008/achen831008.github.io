angular.module('myApp.experience', ['ngRoute', 'myApp.services'])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
            .when('/experience', {
                templateUrl : 'views/experience.html',
                controller  : 'experienceController'
            });
	}])
	.controller('experienceController', ['$scope', '$window', 'experienceService', function ($scope, $window, experienceService) {
	    var vm = this;
        $scope.show = false;
        $scope.style = $window.innerWidth > 600;
        $scope.templateTitle = "Experience";
        
        $scope.showDetail = function (job) {
            $scope.show = true;
            $scope.job = job;
        };

        $scope.hideDetail = function () {
            $scope.show = false;
        };
        
        $scope.initScope = function () {
            experienceService.get('scripts/experience.json').then(function (rsp) {
                $scope.jobs = rsp.data.Jobs;
                $scope.others = rsp.data.others;
            });
        };
        
        $scope.initScope();
    }]);
