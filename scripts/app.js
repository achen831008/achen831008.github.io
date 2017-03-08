(function () {
    'use strict';

    angular
        .module('app', ['ngRoute', 'wt.responsive', 'app.services', 'ui.bootstrap'])
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $routeProvider
                .when('/', {
                    templateUrl : 'views/main.html',
                    controller  : 'mainController'
                })
                .when('/about', {
                    templateUrl : 'views/about.html',
                    controller  : 'aboutController'
                })
                .when('/experience', {
                    templateUrl : 'views/experience.html',
                    controller  : 'experienceController'
                })
                .when('/project', {
                    templateUrl : 'views/project.html',
                    controller  : 'projectController'
                })
                .otherwise({ redirectTo: '/' });

            $locationProvider.html5Mode(true);
        }]);
})();
