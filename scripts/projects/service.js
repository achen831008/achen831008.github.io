(function() {
    'use strict';
    angular
    .module('app')
    .factory('gitService', gitService);

    gitService.$inject = ['$http'];

    function gitService($http) {
        var client_id = 'afbb4290f62981eefb73';
        var client_secret = 'f3772fb10197b99e0dd8a3529ae36a424c0d9544';

        return {
            getRepos: getRepos,
            getCommits: getCommits,
            withinOneWeek: withinOneWeek,
            lastWeekDate: lastWeekDate
        };

        function getRepos() {
            var endpoint = 'https://api.github.com/users/achen831008/repos';

            return $http.get(endpoint, {
                    params: {
                        "client_id": client_id,
                        "client_secret": client_secret
                    }
                })
                .then(getReposSuccess)
                .catch(getReposError);

            function getReposSuccess(rsp) {
                return rsp.data;
            }

            function getReposError(error) {
                console.log(error);
            }
        }

        function getCommits(repo) {
            return $http.get(repo.url + '/commits', {
                params: {
                    "client_id": client_id,
                    "client_secret": client_secret
                }
            })
            .then(getCommitsSuccess)
            .catch(getCommitsError);

            function getCommitsSuccess(rsp) {
                return rsp.data;
            }

            function getCommitsError(error) {
                console.log(error);
            }
        }

        function withinOneWeek(commit) {
            var oneWeekAgo = lastWeekDate();
            return commit.committer.date >= oneWeekAgo;
        }

        function lastWeekDate() {
            var oneWeekAgo = new Date();
            oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
            oneWeekAgo = oneWeekAgo.toISOString().split("T")[0];
            return oneWeekAgo;
        }
    }
})();
