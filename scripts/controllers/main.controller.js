(function () {
    'use strict';

    angular
        .module('app')
        .controller('mainController', mainController);

    mainController.$inject = ['$scope', 'queryService'];

    function mainController($scope, queryService) {
        var vm = this;

        $scope.initScope = function () {
            $scope.program = 'Computing and Financial Management';

            queryService.get('/data/contact.json').then(function (rsp) {
                $scope.contacts = rsp.data.contacts;
            });
        }

        $scope.initScope();
    }
})();
