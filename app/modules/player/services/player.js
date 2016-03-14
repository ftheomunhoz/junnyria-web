/**
 *
 * @module
 * @author ftheomunhoz
 */

(function () {
    "use strict";

    function playerService($http, appSettings) {
        return {
            getChar: function () {
                return $http.get(appSettings.charEndpoint + '/char');
            }
        }
    }

    angular.module('junnyria.player').service("playerService", playerService);
})();
