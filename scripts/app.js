angular
    .module('myApp', ['ngRoute', 'myApp.main', 'myApp.experience', 'myApp.about', 'wt.responsive'])

    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider
        .when('/about', {
                templateUrl : 'views/about.html',
                controller  : 'aboutController'
        })
        .when('/project', {
                templateUrl : 'views/project.html',
                controller  : 'projectController'               
        })
        .otherwise('/');

        $locationProvider.html5Mode(true);
    }])

    .controller('masterController',['$scope', '$rootScope', '$location', '$sce', '$window', function($scope, $rootScope, $location, $sce, $window) {
        $scope.Name = 'Alex Chen';
        $scope.copyright = $sce.trustAsHtml("Copyright &copy; 2017 Alex Chen");
        $scope.menu = [
                {label:'Home', route:'/', icon:'fa-home'},
                {label:'About', route:'/about', icon:'fa-user'},
                {label:'Experience', route:'/experience', icon:'fa-tasks'},
                {label:'Projects', route:'/project', icon:'fa-wpforms'}
        ]
        $scope.menuActive = '/';
        $rootScope.$on('$routeChangeSuccess', function(e, curr, prev) {
                $scope.menuActive = $location.path();
        });
        $scope.navStyle = ($window.innerWidth > 600);

        $scope.setActive = function(label) {
            (label == 'Home') ? angular.element('#Home').addClass("active") : angular.element('#Home').removeClass("active");
            (label == 'About') ? angular.element('#About').addClass("active") : angular.element('#About').removeClass("active");
            (label == 'Experience') ? angular.element('#Experience').addClass("active") : angular.element('#Experience').removeClass("active");
            (label == 'Projects') ? angular.element('#Projects').addClass("active") : angular.element('#Projects').removeClass("active");
        }      
    }]);
