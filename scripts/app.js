(function () {
    'use strict';

    angular
        .module('app', ['ngRoute'])
        .config(function($routeProvider) {
            $routeProvider
            .when('/', {
                templateUrl : 'views/home/home.html',
				controller  : 'homeController',
                controllerAs: 'vm'
            })
            .when('/resume', {
                templateUrl : 'views/resume/resume.html',
				controller  : 'resumeController',
                controllerAs: 'vm'
            })
            .when('/projects', {
                templateUrl : 'views/project/project.html',
				controller  : 'projectController',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: "/"
            });
        });
})();
