(function() {
    'use strict';
    angular
    .module('app')
    .factory('blogService', blogService);

    blogService.$inject = ['$http'];

    function blogService($http, $sce) {
        return {
            getBlogs: getBlogs,
            getBlogById: getBlogById,
            getMarkdown: getMarkdown
        };

        function getBlogs() {
            var url = '/data/blog.json';

            return $http.get(url)
                .then(getBlogsSuccess)
                .catch(getBlogsError);

            function getBlogsSuccess(rsp) {
                return rsp.data.blogs;
            }

            function getBlogsError(error) {
                console.log(error);
            }
        }

        function getBlogById(blogId) {
            var url = '/data/blog.json';

            return $http.get(url)
                .then(getBlogByIdSuccess)
                .catch(getBlogByIdError);

            function getBlogByIdSuccess(rsp) {
                var blog = _.find(rsp.data.blogs, function(blog){
                    return blog.id == blogId;
                })

                return blog;
            }

            function getBlogByIdError(error) {
                console.log(error);
            }
        }

        function getMarkdown(url) {
            return $http.get(url)
                .then(getMarkdownSuccess)
                .catch(getMarkdownError);

            function getMarkdownSuccess(rsp) {
                console.log(rsp.data);
                return rsp.data;
            }

            function getMarkdownError(error) {
                console.log(error);
            }
        }
    }
})();
