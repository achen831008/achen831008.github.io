(function () {
    'use strict';

    angular
        .module('app')
        .controller('experienceController', experienceController);

    experienceController.$inject = ['experienceService', '$routeParams'];

    function experienceController(experienceService, $routeParams) {
        var vm = this;
        init();

        function init() {
            vm.scroll = 0;
            vm.loading = true;
            return getExperiences().then(function() {
                if($routeParams.experience_id) {
                    vm.experience_id = $routeParams.experience_id;
                    vm.experience = getExperienceById();
                }
            });
        };

        function getExperiences() {
            return experienceService.getExperiences().then(function(data) {
                vm.loading = false;
                vm.experiences = data.experiences;
                return vm.experiences;
            });
        }

        function getExperienceById() {
            return experienceService.getExperienceById(vm.experiences, vm.experience_id);
        }
    }
})();
