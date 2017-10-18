(function () {
    'use strict';

    angular
        .module('app')
        .controller('homeController', homeController);

//    homeController.$inject = [];

    function homeController() {
        var vm = this;
        vm.init = init;
        vm.init();

        function init() {
            vm.scroll = 0;
        };
    }
})();
