var app = angular
        .module('mySite', ['ngRoute'])
        .config(config);

/* config */
function config($routeProvider, $locationProvider) {
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
        .otherwise('/');

        $locationProvider.html5Mode(true);
}

/* controller */
masterController.$inject = ['$scope', '$rootScope', '$location', '$sce'];
function masterController($scope, $rootScope, $location, $sce) {
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
}

/* controller */
mainController.$inject = ['$scope'];
function mainController($scope) {
        var vm = this;
        $scope.role = role = 'Software Engineering';
}

/* controller */

