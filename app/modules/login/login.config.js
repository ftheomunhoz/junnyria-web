/**
 *
 * @module
 * @author ftheomunhoz
 */

(function () {
    "use strict";

    function config($stateProvider, authProvider) {
        $stateProvider
            .state('login', {
                url: "/login",
                templateUrl: "modules/login/views/login.html",
                controller: "loginController as vm"
            });

        //TODO: Maybe move to config?
        authProvider.init({
            domain: 'app44880966.auth0.com',
            clientID: 'QX8GEgdK1R28ZdC1uF5JlsnvZZRByoft'
        });
    }

    angular.module('junnyria.login').config(config);
})();
