angular.module('myApp.about', ['ngRoute', 'myApp.services'])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
            .when('/about', {
                templateUrl : 'views/about.html',
                controller  : 'aboutController'
            });
	}])
	.controller('aboutController', ['$scope', '$window', 'experienceService', function ($scope, $window, experienceService) {
        $scope.initScope = function () {
            experienceService.get('scripts/about.json').then(function (rsp) {
                $scope.categories = rsp.data.categories;
                $scope.quote = rsp.data.quote;
                $scope.quoteFrom = rsp.data.quoteFrom;
            });
        };

        $scope.style = $window.innerWidth > 600;
        $scope.initScope();
    }]);
