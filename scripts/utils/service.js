(function() {
    'use strict';
    angular
    .module('app')
    .factory('utilityService', utilityService);

    function utilityService() {
        function open() {
            angular.element('.hide-sidebar').css('display', 'block');
        }

        function close() {
            angular.element('.hide-sidebar').css('display', 'none');
        }

        return {
            open: open,
            close: close
        }
    }
})();
