/**
 * @module
 * @author ftheomunhoz
 * @description
 *
 */

(function () {
    "use strict";

    function loginFormController($state){
        var vm = this;

        vm.login = function() {
            $state.go('player');
        };
    }

    function loginForm() {
        return {
            restrict: 'E',
            controller: loginFormController,
            controllerAs: 'vm',
            scope: false,
            templateUrl: 'modules/login/directives/login-form/login-form.html'
        }
    }

    angular.module('junnyria.login').directive('loginForm', loginForm);
})();