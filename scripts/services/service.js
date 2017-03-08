(function () {
    'use strict';
    
    angular.module('app.services', [])
        .factory('experienceService', experienceService)
        .factory('modalService', modalService);

    function experienceService($http) {
        return {
            get: get
        };
        
        function get(filename) {
            return $http.get(filename);
        }
    }

    function modalService($modal) {
        return {
            open: open
        };

        function open(config) {
            var modalInstance = $modal.open(config);
            return modalInstance;
        }
    }
})();
