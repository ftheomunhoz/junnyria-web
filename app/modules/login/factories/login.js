/**
 * @module
 * @author ftheomunhoz
 * @description
 *
 */

(function(){
    "use strict";
    function loginFactory(appSettings) {
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
                return {
                    popup: true,
                    connection: appSettings[request.connection],
                    scope: 'openid name email'
                };
            }
        }
    }

    angular.module('junnyria.login').service('loginFactory', loginFactory);
})();