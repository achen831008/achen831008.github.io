(function () {
    'use strict';

    angular
        .module('app')
        .controller('experienceController', experienceController);

    experienceController.$inject = ['$scope', '$window', 'experienceService'];

    function experienceController($scope, $window, experienceService) {
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
        
        $scope.initScope();
    }
})();
