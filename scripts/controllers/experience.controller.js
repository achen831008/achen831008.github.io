(function () {
    'use strict';

    angular
        .module('app')
        .controller('experienceController', experienceController);

    experienceController.$inject = ['$scope', '$window', 'experienceService', 'modalService'];

    function experienceController($scope, $window, experienceService, modalService) {
	    var vm = this;
        $scope.show = false;
        $scope.style = $window.innerWidth > 600;
        $scope.templateTitle = "Experience";
        
        $scope.showDetail = function (job) {
            $scope.show = true;
            $scope.job = job;
        };

        $scope.hideDetail = function () {
            $scope.show = false;
        };
        
        $scope.initScope = function () {
            experienceService.get('/data/experience.json').then(function (rsp) {
                $scope.exps = rsp.data.Experiences;
                
            });
        };
        
        vm.createModal = function () {
            var config = {
                templateUrl: '/views/experience.modal.html',
                windowClass: 'large',
                //controller: 'experienceController as vm',
                backdrop: 'static',
                resolve: {}
            };

            var createModalInstance = modalService.open(config);
        }

        $scope.initScope();
    }
})();
