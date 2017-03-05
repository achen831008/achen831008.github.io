(function () {
    'use strict';

    angular
        .module('app')
        .controller('mainController', mainController);

    mainController.$inject = ['$scope'];

    function mainController($scope) {
        var vm = this;
        $scope.program = 'Computing and Financial Management';
    }
})();
