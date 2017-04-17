(function () {
    'use strict';

    angular
        .module('app')
        .controller('aboutController', aboutController);

    aboutController.$inject = ['$scope', '$window', 'queryService'];

    function aboutController($scope, $window, queryService) {
        $scope.initScope = function () {
            $scope.activePage = 0;
            $scope.maxPage = 1;
            $scope.style = $window.innerWidth > 600;

            queryService.get('/data/about.json').then(function (rsp) {
                $scope.categories = rsp.data.categories;
                $scope.quote = rsp.data.quote;
                $scope.quoteFrom = rsp.data.quoteFrom;
            });
        };

        $scope.previous = function () {
            if($scope.activePage == 0) {
                $scope.activePage = $scope.maxPage;
            }
            else {
                $scope.activePage -= 1;
            }
        }

        $scope.next = function () {
            if($scope.activePage == $scope.maxPage) {
                $scope.activePage = 0;
            }
            else {
                $scope.activePage += 1;
            }
        }

        $scope.initScope();
    }
})();
