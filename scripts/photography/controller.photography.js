(function () {
    'use strict';

    angular
        .module('app')
        .controller('photographyController', photographyController);

    photographyController.$inject = ['instagramService'];

    function photographyController(instagramService) {
        var vm = this;
        vm.loadMoreFeeds = loadMoreFeeds;

        init();

        function initInstagram() {
            vm.instagram = {};
            vm.instagram.limit = 6;
            vm.instagram.max = 18;
            getFeeds();
        };

        function init() {
            vm.scroll = 0;
            vm.loading = true;
            initInstagram();
        };

        function loadMoreFeeds() {
            vm.instagram.limit += 6;
        };

        function getFeeds() {
            return instagramService.getFeeds()
                .then(function(data) {
                    vm.loading = false;
                    vm.instagram.feeds = data;
                    return vm.instagram.feeds
                });
        }
    }
})();
