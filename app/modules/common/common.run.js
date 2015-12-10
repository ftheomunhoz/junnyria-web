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

    function run($state) {
        $state.go('login');
    }

    angular.module('junnyria.common').run(run);
})();
