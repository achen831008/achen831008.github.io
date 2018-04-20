(function () {
    'use strict';

    angular
        .module('app')
        .controller('resumeController', resumeController);

    resumeController.$inject = ['experienceService'];

    function resumeController(experienceService) {
        var vm = this;
        init();

        function init() {
            return getExperience().then(function(data){
                vm.experience = data;
            })
        };

        function getExperience() {
            return experienceService.getExperience().then(function(data) {
                return data;
            });
        }
    }
})();
