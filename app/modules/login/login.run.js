/**
 * @module
 * @author ftheomunhoz
 * @description
 *
 */

/**
 *
 * @module
 * @author ftheomunhoz
 */

(function () {
    "use strict";

    function run(auth, activeUserFactory, jwtHelper, $rootScope, $location) {
        auth.hookEvents();

        $rootScope.$on('$stateChangeStart', function () {
            var token = activeUserFactory.getToken();

            if (token && !jwtHelper.isTokenExpired(token)) {
                if (!auth.isAuthenticated) {
                    auth.authenticate(activeUserFactory.getActiveUser(), token);
                }
            } else {
                $location.path('/login');
            }
        });
    }

    angular.module('junnyria.login').run(run);
})();
