(function () {
    'use strict';

    angular
        .module('app')
        .controller('photographyController', photographyController);

    photographyController.$inject = ['$http', '$sce'];

    function photographyController($http, $sce) {
        var vm = this;
        vm.init = init;
        vm.initInstagram = initInstagram;
        vm.loadMoreFeeds = loadMoreFeeds;
        vm.init();

        function initInstagram() {
            vm.instagram = {};
            vm.instagram.limit = 6;
            vm.instagram.max = 18;
            vm.instagram.endpoint = 'https://api.instagram.com/v1/users/self/media/recent/';
            vm.instagram.api_access_token = '214634784.8a868cf.f7f8c489d0b64ecaa966e24cd1b4538b';
            vm.instagram.url = vm.instagram.endpoint + '?access_token=' + vm.instagram.api_access_token;
            vm.instagram.url = $sce.trustAsResourceUrl(vm.instagram.url);
        };

        function init() {
            vm.scroll = 0;
            vm.initInstagram();
        };

        function loadMoreFeeds() {
            vm.instagram.limit += 6;
        };

        //loading instagram data
        $http.jsonp(vm.instagram.url).then(function (rsp){
            vm.instagram.feeds = rsp.data.data;
        });
    }
})();
