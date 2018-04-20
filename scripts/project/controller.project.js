(function () {
    'use strict';

    angular
        .module('app')
        .controller('projectController', projectController);

    projectController.$inject = ['gitService', 'utilityService'];

    function projectController(gitService, utilityService) {
        var vm = this;
        init();

        function getRepos() {
            return gitService.getRepos().then(function(data) {
                return data;
            });
        }

        function init() {
            vm.loading = true;
            vm.utility = utilityService;
            vm.github = {};

            return getRepos().then(function(repos){
                vm.github.repos = repos;
                vm.loading = false;
            });
        };
    }
})();
