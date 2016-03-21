/**
 *
 * @module
 * @author ftheomunhoz
 */

(function () {
    "use strict";

    function playerService($http, appSettings) {
        return {
            getChar: function (id) {
                return $http.get(appSettings.charEndpoint + '/char/' + (id || 0));
            }
        }
    }

    angular.module('junnyria.player').service("playerService", playerService);
})();
