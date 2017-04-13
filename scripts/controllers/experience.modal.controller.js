(function () {
    'use strict';

    angular
        .module('app')
        .controller('experienceModalController', experienceModalController);

    experienceModalController.$inject = ['$scope', '$modalInstance', '$window', 'experienceService', 'modalService', '$rootScope'];

    function experienceModalController($scope, $modalInstance, $window, experienceService, modalService, $rootScope) {
	    var vm = this;

        $scope.initScope = function () {
            $scope.exp = $rootScope.exp;
        }

        vm.close = function () {
            $modalInstance.close();
        }

        $scope.initScope();
    }
})();
