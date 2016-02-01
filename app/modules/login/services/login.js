/**
 * @module
 * @author ftheomunhoz
 * @description
 *
 */

(function(){
    "use strict";
    function loginService(auth) {
        return {
            login: function(data, success, error) {
                return auth.signin(data, success, error);
            }
        }
    }

    angular.module('junnyria.login').service('loginService', loginService);
})();