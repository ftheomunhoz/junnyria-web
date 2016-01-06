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
                templateUrl: "modules/common/views/login.html",
                controller: "loginController as vm"
            });

        //TODO: Maybe move to config?
        authProvider.init({
            domain: 'app44880966.auth0.com',
            clientID: 'TnMTRFqgFsjDRpWUi5LE1VHvJ0kqg3yD'
        });
    }

    angular.module('junnyria.common').config(config);
})();
