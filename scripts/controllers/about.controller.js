(function () {
    'use strict';

    angular
        .module('app')
        .controller('aboutController', aboutController);

    aboutController.$inject = ['$scope', '$window', 'experienceService'];

    function aboutController($scope, $window, experienceService) {
        $scope.initScope = function () {
            experienceService.get('/data/about.json').then(function (rsp) {
                $scope.categories = rsp.data.categories;
                $scope.quote = rsp.data.quote;
                $scope.quoteFrom = rsp.data.quoteFrom;
            });
        };

        $scope.style = $window.innerWidth > 600;
        $scope.initScope();
    }
})();
