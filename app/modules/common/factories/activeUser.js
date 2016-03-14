/**
 * @module
 * @author ftheomunhoz
 * @description
 *
 */

(function(){
    "use strict";

    function activeUserFactory(store) {
        var PROFILE_KEY = 'profile';
        var TOKEN_KEY = 'token';

        return {
            setActiveUser: function(profile, token) {
                store.set(PROFILE_KEY, profile);
                store.set(TOKEN_KEY, token);
            },
            clearActiveUser: function() {
                store.remove(PROFILE_KEY);
                store.remove(TOKEN_KEY);
            },
            getActiveUser: function() {
                return store.get(PROFILE_KEY);
            },
            getToken: function() {
                return store.get(TOKEN_KEY);
            }
        }
    }

    angular.module('junnyria.common').factory('activeUserFactory', activeUserFactory);
})();