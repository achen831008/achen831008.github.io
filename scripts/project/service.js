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
            getRepos: getRepos
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
                var repos = rsp.data;
                _.each(repos, function(repo){
                    repo.latest_push_date = repo.pushed_at.split('T')[0];
                })

                return repos;
            }

            function getReposError(error) {
                console.log(error);
            }
        }
    }
})();
