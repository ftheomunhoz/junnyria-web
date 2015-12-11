/**
 * @module
 * @author ftheomunhoz
 * @description
 *
 */

(function(){
    "use strict";

    function activeUserFactory() {
        var activeUser = {};

        return {
            setActiveUser: function(user) {
                activeUser = user;
            },
            getActiveUser: function() {
                return activeUser;
            }
        }
    }

    angular.module('junnyria.common').service('activeUserFactory', activeUserFactory);
})();