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
    }

    angular.module('junnyria.login').run(run);
})();
