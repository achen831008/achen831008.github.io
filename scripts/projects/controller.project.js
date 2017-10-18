(function () {
    'use strict';

    angular
        .module('app')
        .controller('projectController', projectController);

    projectController.$inject = ['$http'];

    function projectController($http) {
        var vm = this;
        vm.init = init;
        vm.initGithub = initGithub;
        vm.init();

        //loading github data
        $http.get(vm.github.repos_url + vm.github.authenticate).then(function (rsp){
            vm.github.repos = rsp.data;

            _.each(vm.github.repos, function(repo){
                repo.latest_push_date = repo.pushed_at.split('T')[0];
                $http.get(repo.url + '/commits' + vm.github.authenticate).then(function(rsp){
                    _.each(rsp.data, function(elem){
                        if(elem.commit.committer.date >= vm.oneWeekAgo){
                            vm.github.commits.push(elem.commit);
                        }
                    });
                });
            });
        });

        function initGithub() {
            vm.github = {};
            vm.github.repos_url = 'https://api.github.com/users/achen831008/repos';
            vm.github.commits = [];
            vm.github.client_id = 'afbb4290f62981eefb73';
            vm.github.client_secret = 'f3772fb10197b99e0dd8a3529ae36a424c0d9544';
            vm.github.authenticate = '?client_id=' + vm.github.client_id + '&client_secret=' + vm.github.client_secret;
            vm.github.today_commit = 0;
        };

        function init() {
            vm.scroll = 0;
            vm.oneWeekAgo = new Date();
            vm.oneWeekAgo.setDate(vm.oneWeekAgo.getDate() - 7);
            vm.oneWeekAgo = vm.oneWeekAgo.toISOString().split("T")[0];
            vm.initGithub();
        };
    }
})();
