/**
 *
 * @module
 * @author ftheomunhoz
 */

(function () {
    "use strict";

    function config($stateProvider) {
        $stateProvider
            .state('host', {
                url: "/host",
                templateUrl: "modules/host/views/host.html",
                controller: "hostController as hostVM",
                data: {
                    requiresLogin: false
                }
            });
    }

    angular.module('junnyria.host').config(config);
})();
