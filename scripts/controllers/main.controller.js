angular.module('myApp.main',['ngRoute'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
        .when('/', {
                templateUrl : 'views/main.html',
                controller  : 'mainController'
        });
	}])

	.controller('mainController', ['$scope', function($scope) {
        var vm = this;
        $scope.role = 'Software Engineering';
    }]);
