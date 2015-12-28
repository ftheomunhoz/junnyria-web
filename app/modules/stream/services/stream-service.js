/**
 * @module
 * @author ftheomunhoz
 * @description
 *
 */

(function () {
    "use strict";
    function streamService($q) {
        var stream;
        return {
            get: function (isMaster) {
                if (stream) {
                    return $q.when(stream);
                } else {
                    var d = $q.defer();
                    navigator.getUserMedia({
                        video: isMaster,
                        audio: true
                    }, function (s) {
                        stream = s;
                        d.resolve(stream);
                    }, function (e) {
                        for (var att in e) {
                            alert('att - '+e[att]);
                        }
                        d.reject(e);
                    });
                    return d.promise;
                }
            }
        };
    }

    angular.module('junnyria.stream').service('streamService', streamService);
})();