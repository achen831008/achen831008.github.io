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
            vm.toggleItem = toggleItem;
            vm.toggleAll = toggleAll;
            getExperience();
        };

        function getExperience() {
            return experienceService.getExperience().then(function(data) {
                vm.loading = false;
                vm.experience = data;
                return vm.experience;
            });
        }

        function toggleItem(list, id) {
            list[id] = !list[id];
        }

        function toggleAll(list) {
            for (var i = 0; i < list.length; ++i) {
                list[i] = !list[i];
            }
        }
    }
})();
