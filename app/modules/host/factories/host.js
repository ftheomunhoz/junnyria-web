/**
 *
 * @module
 * @author ftheomunhoz
 */

(function () {
    "use strict";

    function hostFactory() {
        return {
            charListToModel: function(data) {
                if (angular.isDefined(data) && angular.isDefined(data.data) && angular.isDefined(data.data.charList)) {
                    return data.data.charList;
                }

                return [];
            }
        }
    }

    angular.module('junnyria.host').factory("hostFactory", hostFactory);
})();
