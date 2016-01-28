/**
 * @module
 * @author ftheomunhoz
 * @description
 *
 */

(function(){
    "use strict";
    function loginFactory() {
        return {
            loginToEntity: function(response) {
                if (angular.isUndefined(response) || angular.isUndefined(response.data)) {
                    return null;
                }

                var data = response.data;

                return {
                    username: data.login
                }
            },
            loginToService: function(request) {
                return request;
            }
        }
    }

    angular.module('junnyria.login').service('loginFactory', loginFactory);
})();