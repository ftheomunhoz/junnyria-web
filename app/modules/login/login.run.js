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

    function run(auth, $state) {
        auth.hookEvents();

        $state.go('login');

        /*
        auth.signin({}, function (profile, token) {
            $state.go('player');

            store.set('profile', profile);
            store.set('token', token);
        }, function (err) {
            console.error(err);
        });
        */

        //auth.signin();

    }

    angular.module('junnyria.login').run(run);
})();