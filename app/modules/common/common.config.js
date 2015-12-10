/**
 *
 * @module
 * @author ftheomunhoz
 */

(function () {
    "use strict";

    function config($stateProvider) {
        $stateProvider
            .state('login', {
                url: "/login",
                templateUrl: "modules/common/views/login.html",
                controller: "loginController as vm"
            });
    }

    angular.module('junnyria.common').config(config);
})();
