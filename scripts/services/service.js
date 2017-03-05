(function () {
    'use strict';
    
    angular.module('app.services', [])
        .factory('experienceService', experienceService);

    function experienceService($http) {
        return {
            get: get
        };
        
        function get(filename) {
            return $http.get(filename);
        }
    }
})();
