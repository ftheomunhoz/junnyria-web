/**
 * @module
 * @author ftheomunhoz
 * @description
 *
 */

(function () {
    "use strict";

    function loginFormController(loginService, loginFactory, $state, activeUserFactory, appSettings) {
        var vm = this;

        vm.login = function (provider) {
            var loginData = loginFactory.loginToService({
                connection: provider
            });

            loginService.login(loginData, function (profile, token) {
                activeUserFactory.setActiveUser(profile, token);
                $state.go(appSettings.defaultRoute);
            }, function (err) {
                //TODO: HANDLE
                console.log("NOK", arguments);
            });
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