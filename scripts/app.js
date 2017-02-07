angular
    .module('myApp', ['ngRoute', 'myApp.controllers'])
    
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider
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
        .otherwise('/');

        $locationProvider.html5Mode(true);
    }])

    .controller('masterController',['$scope', '$rootScope', '$location', '$sce', function($scope, $rootScope, $location, $sce) {
            $scope.Name = 'Alex Chen';
            $scope.copyright = $sce.trustAsHtml("Copyright &copy; 2017 Alex Chen");
            $scope.menu = [
                    {label:'Home', route:'/'},
                    {label:'About', route:'/about'},
                    {label:'Experience', route:'/experience'},
                    {label:'Projects', route:'/project'}
            ]
            $scope.menuActive = '/';
            $rootScope.$on('$routeChangeSuccess', function(e, curr, prev) {
                    $scope.menuActive = $location.path();
            });
    }]);
