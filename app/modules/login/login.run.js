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

    function run(auth, activeUserFactory, jwtHelper, $rootScope, $state) {
        auth.hookEvents();

        $rootScope.$on('$stateChangeStart', function (e, targetState) {
            if (angular.isDefined(targetState) && angular.isDefined(targetState.data) && targetState.data.requiresLogin === false) {
                return;
            }

            var token = activeUserFactory.getToken();

            if (token && !jwtHelper.isTokenExpired(token)) {
                if (!auth.isAuthenticated) {
                    auth.authenticate(activeUserFactory.getActiveUser(), token);
                }
            } else {
                if (targetState.name !== 'login') {
                    e.preventDefault();

                    $state.go('login');
                }
            }
        });
    }

    angular.module('junnyria.login').run(run);
})();
