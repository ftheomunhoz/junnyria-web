/**
 * @module
 * @author ftheomunhoz
 * @description
 *
 */

(function () {
    "use strict";

    function loginFormController(loginService, loginFactory, $state, activeUserFactory, auth){
        var vm = this;

        vm.login = function() {
            if (vm.formLogin.$invalid) {
                return;
            }

            var loginData = loginFactory.loginToService({
                username: vm.username,
                password: vm.password,
                connection: 'facebook'
            });

            auth.signin(loginData, function(profile, idToken, accessToken, state, refreshToken) {
                console.log(arguments);
            }, function(error) {
                console.log(error);
            });

            //loginService.login(loginData).then(function(response) {
            //    if (angular.isDefined(response, response.status) && response.status === 200) {
            //        activeUserFactory.setActiveUser(response.data);
            //        $state.go('player');
            //    }
            //});
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