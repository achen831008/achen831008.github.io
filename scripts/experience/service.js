(function() {
    'use strict';
    angular
    .module('app')
    .factory('experienceService', experienceService);

    experienceService.$inject = ['$http'];

    function experienceService($http) {
        return {
            getExperiences: getExperiences,
            getExperienceById: getExperienceById
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

        function getExperienceById(experiences, experience_id) {
            var result = _.find(experiences, function(experience){
                return experience.id == experience_id;
            });

            return result;
        }
    }
})();
