(function () {
    'use strict';

    angular
        .module('app')
        .controller('homeController', homeController);

    homeController.$inject = ['contactService', 'utilityService'];

    function homeController(contactService, utilityService) {
        var vm = this;
        init();

        function getContacts() {
            return contactService.getContacts().then(function(data) {
                return data;
            });
        }

        function init() {
            vm.utility = utilityService;

            return getContacts().then(function(data) {
                vm.contacts = data;
            });
        }
    }
})();
