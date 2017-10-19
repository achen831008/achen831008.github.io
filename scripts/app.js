(function () {
    'use strict';

    angular
        .module('app', ['ngRoute', 'ngAnimate'])
        .config(function($routeProvider) {
            $routeProvider
            .when('/', {
                templateUrl : 'views/home/home.html',
				controller  : 'homeController',
                controllerAs: 'vm'
            })
            .when('/home', {
                templateUrl : 'views/home/home.html',
				controller  : 'homeController',
                controllerAs: 'vm'
            })
            .when('/project', {
                templateUrl : '/views/project/project.html',
                controller  : 'projectController',
                controllerAs: 'vm'
            })
            .when('/photography', {
                templateUrl : '/views/photography/photography.html',
                controller  : 'photographyController',
                controllerAs: 'vm'
            })
            .when('/experience', {
                templateUrl : '/views/experience/landing.html',
                controller  : 'experienceController',
                controllerAs: 'vm'
            })
            .when('/contact', {
                templateUrl : '/views/contact/contact.html',
                controller  : 'contactController',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: "/"
            });
        });
})();
