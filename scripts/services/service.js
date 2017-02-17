(function () {
    'user strict';
    angular.module('myApp.services',[])
    .factory('experienceService', experienceServcie);
    
    function experienceServcie($http) {
        return {
            get: get
        };
        
        function get(filename){
            return $http.get(filename);
        }
    }
})();