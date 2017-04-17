(function () {
    'use strict';
    
    angular.module('app.services', [])
        .factory('queryService', queryService)
        .factory('modalService', modalService);

    function queryService($http) {
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
