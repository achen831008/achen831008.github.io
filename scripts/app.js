(function () {
    'use strict';

    angular
        .module('app', ['ngRoute', 'ngAnimate'])
        .config(function($routeProvider) {
            $routeProvider
            .when('/', {
                templateUrl : 'views/home.html',
				controller  : 'homeController',
                controllerAs: 'vm'
            })
            .when('/home', {
                templateUrl : 'views/home.html',
				controller  : 'homeController',
                controllerAs: 'vm'
            })
            .when('/project', {
                templateUrl : '/views/partials/project.html',
                controller  : 'projectController',
                controllerAs: 'vm'
            })
            .when('/photography', {
                templateUrl : '/views/partials/photography.html',
                controller  : 'photographyController',
                controllerAs: 'vm'
            })
            .when('/contact', {
                templateUrl : '/views/contact.html'
            })
            .otherwise({
                redirectTo: "/"
            });
        });
})();
