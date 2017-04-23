(function () {
    'use strict';

    angular
        .module('app')
        .controller('appController', appController);

    appController.$inject = ['$scope', '$rootScope', '$location', '$sce', '$window'];

    function appController($scope, $rootScope, $location, $sce, $window) {
        $scope.initScope = function () {
            $scope.Name = 'Alex Chen';
            $scope.copyright = $sce.trustAsHtml("Copyright &copy; 2017 Alex Chen");
            $scope.menu = [
                {label: 'Home', route: '/', icon: 'fa-home'},
                {label: 'About', route: '/about', icon: 'fa-user'},
                {label: 'Experience', route: '/experience', icon: 'fa-tasks'},
                {label: 'Github', route: 'https://github.com/achen831008', icon: 'fa-github'},
                {label: 'LinkedIn', route: 'https://ca.linkedin.com/in/achen831008', icon: 'fa-linkedin'}
            ];

            $scope.menuActive = '/';
            $rootScope.$on('$routeChangeSuccess', function (e, curr, prev) {
                $scope.menuActive = $location.path();
            });
            $scope.navStyle = ($window.innerWidth > 600);
        }

        $scope.setActive = function (label) {
            $scope.menu.forEach(function (element) {
                if (label === element.label) {
                    angular.element('#' + element.label).addClass("active");
                }
                else {
                    angular.element('#' + element.label).removeClass("active");
                }
            })
        };

        $scope.initScope();
    }
})();
