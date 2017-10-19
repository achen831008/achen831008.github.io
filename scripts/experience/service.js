(function() {
    'use strict';
    angular
    .module('app')
    .factory('experienceService', experienceService);

    experienceService.$inject = ['$http'];

    function experienceService($http) {
        return {
            getExperiences: getExperiences
        };

        function getExperiences() {
            var url = '/data/v2/experience.json';

            return $http.get(url)
                .then(getExperiencesSuccess)
                .catch(getExperiencesError);

            function getExperiencesSuccess(rsp) {
                return rsp.data;
            }

            function getExperiencesError(error) {
                console.log(error);
            }
        }
    }
})();
