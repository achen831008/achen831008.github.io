(function() {
    'use strict';
    angular
    .module('app')
    .factory('contactService', contactService);

    contactService.$inject = ['$http'];

    function contactService($http) {
        return {
            getContacts: getContacts
        };

        function getContacts() {
            var url = '/data/v2/contact.json';

            return $http.get(url)
                .then(getContactsSuccess)
                .catch(getContactsError);

            function getContactsSuccess(rsp) {
                return rsp.data.contacts;
            }

            function getContactsError(error) {
                console.log(error);
            }
        }
    }
})();
