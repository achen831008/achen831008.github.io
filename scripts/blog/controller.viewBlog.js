(function () {
    'use strict';

    angular
        .module('app')
        .controller('viewBlogController', viewBlogController);

    viewBlogController.$inject = ['$routeParams', 'blogService'];

    function viewBlogController($routeParams, blogService) {
        var vm = this;
        init();

        function init() {
            vm.scroll = 0;
            vm.loading = true;
            vm.blog = {};
            vm.blogId = $routeParams.blogId;
            return getBlogById(vm.blogId).then(function(data) {
                return getMarkdown(data.url);
            });
        };

        function getBlogById(blogId) {
            return blogService.getBlogById(blogId).then(function(data) {
                vm.blog = data;
                return vm.blog;
            });
        }

        function getMarkdown(url) {
            return blogService.getMarkdown(url).then(function(data){
                vm.blog.content = data;
                vm.loading = false;
            });
        }
    }
})();
