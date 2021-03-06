/**
 *
 * @module
 * @author ftheomunhoz
 */

(function () {
    "use strict";

    function hostService($http, appSettings) {
        return {
            getCharList: function () {
                return $http.get(appSettings.charEndpoint + '/char');
            }
        }
    }

    angular.module('junnyria.host').service("hostService", hostService);
})();
