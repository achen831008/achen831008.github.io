(function () {
    'use strict';

    angular
        .module('app', ['ngRoute', 'wt.responsive', 'app.services', 'ui.bootstrap'])
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $routeProvider
                .when('/', {
                    templateUrl : 'views/main.html',
                    controller  : 'mainController',
                    controllerAs : 'vm'
                })
                .when('/about', {
                    templateUrl : 'views/about.html',
                    controller  : 'aboutController'
                })
                .when('/experience', {
                    templateUrl : 'views/experience.html',
                    controller  : 'experienceController',
                    controllerAs : 'vm'
                })
                .when('/project', {
                    templateUrl : 'views/project.html',
                    controller  : 'projectController',
                    controllerAs : 'vm'
                })
                .otherwise({ redirectTo: '/' });

            $locationProvider.html5Mode(true);
        }]);
})();
