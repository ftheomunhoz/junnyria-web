/**
 * @module
 * @author ftheomunhoz
 * @description
 *
 */

(function(){
    "use strict";

    function activeCharFactory() {
        var char = {};

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