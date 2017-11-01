(function () {
    'use strict';

    angular
        .module('app')
        .controller('blogController', blogController);

    blogController.$inject = ['blogService'];

    function blogController(blogService) {
        var vm = this;
        init();

        function init() {
            vm.scroll = 0;
            vm.loading = true;
            getBlogs();
        };

        function getBlogs() {
            return blogService.getBlogs().then(function(data) {
                vm.loading = false;
                vm.blogs = data;
                return vm.blogs;
            });
        }
    }
})();
