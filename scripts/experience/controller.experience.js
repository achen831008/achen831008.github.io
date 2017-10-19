(function () {
    'use strict';

    angular
        .module('app')
        .controller('experienceController', experienceController);

    experienceController.$inject = ['experienceService'];

    function experienceController(experienceService) {
        var vm = this;
        init();

        function init() {
            vm.scroll = 0;
            vm.loading = true;
            getExperiences();
        };

        function getExperiences() {
            return experienceService.getExperiences().then(function(data) {
                vm.loading = false;
                vm.experiences = data.experiences;
                return vm.experiences;
            });
        }
    }
})();
