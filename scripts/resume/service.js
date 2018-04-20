(function() {
    'use strict';
    angular
    .module('app')
    .factory('experienceService', experienceService);

    experienceService.$inject = ['$http'];

    function experienceService($http) {
        return {
            getExperience: getExperience
        };

        function getExperience() {
            var url = '/data/experience.json';

            return $http.get(url)
                .then(getExperienceSuccess)
                .catch(getExperienceError);

            function getExperienceSuccess(rsp) {
                return rsp.data;
            }

            function getExperienceError(error) {
                console.log(error);
            }
        }
    }
})();
