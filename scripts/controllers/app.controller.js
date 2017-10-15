(function () {
    'use strict';

    angular
        .module('app')
        .controller('appController', appController);

    appController.$inject = ['$scope', '$http', '$sce'];

    function appController($scope, $http, $sce) {
        $scope.scroll = 0;
        var instagram_endpoint = 'https://api.instagram.com/v1/users/self/media/recent/';
        var instagram_api_access_token = '214634784.8a868cf.f7f8c489d0b64ecaa966e24cd1b4538b';
        var request_url = instagram_endpoint + '?access_token=' + instagram_api_access_token;
        $scope.feeds_limit = 6;
        request_url = $sce.trustAsResourceUrl(request_url);
        
        $http.get('/data/v2/app.json').then(function(rsp){
            $scope.data = rsp.data;
        });
        
        $http.jsonp(request_url).then(function (rsp){
            $scope.feeds = rsp.data.data;
        });

        //load more
        //https://stackoverflow.com/questions/32211888/how-to-load-more-elements-with-angular

        $scope.loadMore = function() {
            var incremented = $scope.feeds_limit + 6;
            $scope.feeds_limit = incremented > $scope.feeds.length ? $scope.feeds.length : incremented;
        };
    }
})();
