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
            var url = '/data/v2/experience.json';

            return $http.get(url)
                .then(getExperienceSuccess)
                .catch(getExperienceError);

            function getExperienceSuccess(rsp) {
                var result = rsp.data;
                result.educations_show_list = initShowList(result.educations.length);
                result.jobs_show_list = initShowList(result.jobs.length);
                result.awards_show_list = initShowList(result.awards.length);
                result.recommendations_show_list = initShowList(result.recommendations.length);

                return result;
            }

            function getExperienceError(error) {
                console.log(error);
            }

            function initShowList(list_length){
                var myShowList = new Array(list_length);
                for (var i = 0; i < myShowList.length; ++i) {
                    myShowList[i] = false;
                }

                return myShowList;
            }
        }
    }
})();
