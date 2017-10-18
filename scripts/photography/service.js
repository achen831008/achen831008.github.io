(function() {
    'use strict';
    angular
    .module('app')
    .factory('instagramService', instagramService);

    instagramService.$inject = ['$http', '$sce'];

    function instagramService($http, $sce) {
        return {
            getFeeds: getFeeds
        };

        function getFeeds() {
            var endpoint = 'https://api.instagram.com/v1/users/self/media/recent/';
            var access_token = '214634784.8a868cf.f7f8c489d0b64ecaa966e24cd1b4538b';
            var url = endpoint + '?access_token=' + access_token;
            url = $sce.trustAsResourceUrl(url);

            return $http.jsonp(url)
                .then(getFeedsSuccess)
                .catch(getFeedsError);

            function getFeedsSuccess(rsp) {
                return rsp.data.data;
            }

            function getFeedsError(error) {
                console.log(error);
            }
        }
    }
})();
