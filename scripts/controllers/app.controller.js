(function () {
    'use strict';

    angular
        .module('app')
        .controller('appController', appController);

    appController.$inject = ['$scope', '$http', '$sce'];

    function appController($scope, $http, $sce) {
        //https://api.instagram.com/v1/users/self/media/recent/?access_token=6214268740.c67ca99.7925875186c8449c84fdfe7cfea728d9
        var instagram_endpoint = 'https://api.instagram.com/v1/users/self/media/recent/';
        var instagram_api_access_token = '6214268740.c67ca99.7925875186c8449c84fdfe7cfea728d9';
        var request_url = instagram_endpoint + '?access_token=' + instagram_api_access_token;
        
        request_url = $sce.trustAsResourceUrl(request_url);
        
        $http.get('/data/v2/app.json').then(function(rsp){
            $scope.data = rsp.data;
        });
        
        $http.jsonp(request_url).then(function (rsp){
            $scope.feeds = rsp.data.data;
        });
    }
})();
