(function () {
    'use strict';

    angular
        .module('app')
        .controller('contactController', contactController);

    contactController.$inject = ['contactService'];

    function contactController(contactService) {
        var vm = this;
        init();

        function init() {
            vm.scroll = 0;
            vm.loading = true;
            getContacts();
        };

        function getContacts() {
            return contactService.getContacts().then(function(data) {
                vm.loading = false;
                vm.contacts = data;
                return vm.contacts;
            });
        }
    }
})();
