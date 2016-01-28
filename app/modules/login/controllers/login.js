/**
 *
 * @module
 * @author ftheomunhoz
 */

(function () {
    "use strict";

    function loginController(loginService, loginFactory, $state, activeUserFactory) {
        var vm = this;

        vm.login = function() {
            if (vm.formLogin.$invalid) {
                return;
            }

            var loginData = loginFactory.loginToService({
                login: vm.username,
                password: vm.password
            });

            loginService.login(loginData).then(function(response) {
                if (angular.isDefined(response, response.status) && response.status === 200) {
                    activeUserFactory.setActiveUser(response.data);
                    $state.go('player');
                }
            });
        };
    }


    angular.module('junnyria.login').controller('loginController', loginController);
})();