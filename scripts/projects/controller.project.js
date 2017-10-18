(function () {
    'use strict';

    angular
        .module('app')
        .controller('projectController', projectController);

    projectController.$inject = ['gitService'];

    function projectController(gitService) {
        var vm = this;
        init();

        function getRepos() {
            return gitService.getRepos()
                .then(function(data) {
                    vm.github.repos = data;
                    return vm.github.repos;
                })
        }

        function getCommits(repo) {
            return gitService.getCommits(repo)
                .then(function(data){
                    return vm.github.commits = vm.github.commits.concat(data);
                })
        }

        function initGithub() {
            vm.github = {};
            vm.github.repos = [];
            vm.github.commits = [];
            return getRepos()
                .then(function(repos){
                    _.each(repos, function(repo){
                        getCommits(repo)
                            .then(function(){
                                vm.github.commits = _.filter(vm.github.commits, function(data){
                                    return gitService.withinOneWeek(data.commit);
                                })
                            })
                    });
                });
        };

        function init() {
            vm.scroll = 0;
            vm.loading = true;
            initGithub();
        };
    }
})();
