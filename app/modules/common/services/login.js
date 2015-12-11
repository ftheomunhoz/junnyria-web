/**
 * @module
 * @author ftheomunhoz
 * @description
 *
 */

(function(){
    "use strict";
    function loginService($q) {
        return {
            login: function(data) {
                var deffered = $q.defer();

                deffered.resolve({
                    status: 200,
                    data: data
                });

                return deffered.promise;
            }
        }
    }

    angular.module('junnyria.common').service('loginService', loginService);
})();