(function () {
    'use strict';

    angular
        .module('app')
        .controller('experienceController', experienceController);

    experienceController.$inject = ['$scope', '$rootScope', '$window', 'experienceService', 'modalService'];

    function experienceController($scope, $rootScope, $window, experienceService, modalService) {
	    var vm = this;
        
        $scope.initScope = function () {
            $scope.show = false;
            $scope.style = $window.innerWidth > 600;
            $scope.templateTitle = "Experience";

            experienceService.get('/data/experience.json').then(function (rsp) {
                $scope.exps = rsp.data.Experiences;
            });
        };
        
        vm.view = function (shortname) {
            experienceService.get('/data/experience/' + shortname + '.json').then(function (rsp) {
                $rootScope.exp = rsp.data;
            });

            var config = {
                templateUrl: '/views/experience.modal.html',
                size: 'lg',
                controller: 'experienceModalController as vm',
                backdrop: 'static',
                resolve: {}
            };

            var createModalInstance = modalService.open(config);
        }

        $scope.initScope();
    }
})();
