/**
 * @module
 * @author ftheomunhoz
 * @description
 *
 */

(function(){
    "use strict";

    function activeCharFactory() {
        var char = undefined;

        return {
            setActiveChar: function(c) {
                char = c;
            },
            getActiveChar: function() {
                return char;
            }
        }
    }

    angular.module('junnyria.common').factory('activeCharFactory', activeCharFactory);
})();