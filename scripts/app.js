(function () {
    'use strict';

    angular
        .module('app', ['ngRoute', 'ngAnimate'])
        .config(function($routeProvider) {
            $routeProvider
            .when('/', {
                templateUrl : 'views/home.html',
				controller  : 'homeController'
            })
            .when('/home', {
                templateUrl : 'views/home.html'
            })
            .when('/project', {
                templateUrl: '/views/partials/project.html'
            })
            .when('/photography', {
                templateUrl: '/views/partials/feed.html'
            })
            .when('/contact', {
                templateUrl: '/views/contact.html'
            })
            .otherwise({
                redirectTo: "/"
            });
        });
})();
