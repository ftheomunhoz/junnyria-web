/**
 *
 * @module
 * @author ftheomunhoz
 */

(function () {
    "use strict";

    function playerFactory() {
        return {
            charToModel: function(data) {
                if (angular.isDefined(data) && angular.isDefined(data.data) && angular.isDefined(data.data.charList)) {
                    return data.data.char;
                }

                return {};
            }
        }
    }

    angular.module('junnyria.player').factory("playerFactory", playerFactory);
})();
