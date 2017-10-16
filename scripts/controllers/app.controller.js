(function () {
    'use strict';

    angular
        .module('app')
        .controller('appController', appController);

    appController.$inject = ['$scope', '$http', '$sce'];

    function appController($scope, $http, $sce) {
        
        var initInstagram = function() {
            $scope.instagram = {};
            $scope.instagram.limit = 6;
            $scope.instagram.endpoint = 'https://api.instagram.com/v1/users/self/media/recent/';
            $scope.instagram.api_access_token = '214634784.8a868cf.f7f8c489d0b64ecaa966e24cd1b4538b';
            $scope.instagram.url = $scope.instagram.endpoint + '?access_token=' + $scope.instagram.api_access_token;
            $scope.instagram.url = $sce.trustAsResourceUrl($scope.instagram.url);
        };

        var initGithub = function() {
            $scope.github = {};
            $scope.github.repos_url = 'https://api.github.com/users/achen831008/repos';
            $scope.github.commits = [];
            $scope.github.client_id = 'afbb4290f62981eefb73';
            $scope.github.client_secret = 'f3772fb10197b99e0dd8a3529ae36a424c0d9544';
            $scope.github.authenticate = '?client_id=' + $scope.github.client_id + '&client_secret=' + $scope.github.client_secret;
            $scope.github.today_commit = 0;
        };

        var init = function() {
            $scope.scroll = 0;
            $scope.oneWeekAgo = new Date();
            $scope.oneWeekAgo.setDate($scope.oneWeekAgo.getDate() - 7);
            $scope.oneWeekAgo = $scope.oneWeekAgo.toISOString().split("T")[0];
            initInstagram();
            initGithub();
        };

        init();

        $scope.loadMoreFeeds = function() {
            var incremented = $scope.instagram.limit + 6;
            $scope.instagram.limit = incremented > $scope.instagram.feeds.length ? $scope.instagram.feeds.length : incremented;
        };

        //loading personal data
        $http.get('/data/v2/app.json').then(function(rsp){
            $scope.data = rsp.data;
        });
        
        //loading instagram data
        $http.jsonp($scope.instagram.url).then(function (rsp){
            $scope.instagram.feeds = rsp.data.data;
        });

        //loading github data
        $http.get($scope.github.repos_url + $scope.github.authenticate).then(function (rsp){
            $scope.github.repos = rsp.data;

            _.each($scope.github.repos, function(repo){
                repo.latest_push_date = repo.pushed_at.split('T')[0];
                $http.get(repo.url + '/commits' + $scope.github.authenticate).then(function(rsp){
                    _.each(rsp.data, function(elem){
                        if(elem.commit.committer.date >= $scope.oneWeekAgo){
                            $scope.github.commits.push(elem.commit);
                        }
                    });
                });
            });
        });
    }
})();
