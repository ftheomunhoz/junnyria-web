/**
 *
 * @module
 * @author ftheomunhoz
 */

(function () {
    "use strict";

    function config($stateProvider) {
        $stateProvider
            .state('player', {
                url: "/player",
                templateUrl: "modules/player/views/player.html",
                controller: "playerController as vm",
                data: {
                    requiresLogin: false
                }
            });
    }

    angular.module('junnyria.player').config(config);
})();
