(function () {
    'use strict';

    angular
        .module('app', ['ngRoute', 'ngAnimate', 'hc.marked'])
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
                templateUrl : '/views/experience/experience.html',
                controller  : 'experienceController',
                controllerAs: 'vm'
            })
            .when('/contact', {
                templateUrl : '/views/contact/contact.html',
                controller  : 'contactController',
                controllerAs: 'vm'
            })
            .when('/blog', {
                templateUrl : '/views/blog/blog.html',
                controller  : 'blogController',
                controllerAs: 'vm'
            })
            .when('/blog/:blogId', {
                templateUrl : '/views/blog/view-blog.html',
                controller  : 'viewBlogController',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: "/"
            });
        });
})();
