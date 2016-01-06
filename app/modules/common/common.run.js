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

    function run($state, auth, store) {
        auth.hookEvents();

        auth.signin({}, function (profile, token) {
            $state.go('player');

            store.set('profile', profile);
            store.set('token', token);
        }, function (err) {
            console.error(err);
        });

    }

    angular.module('junnyria.common').run(run);
})();
