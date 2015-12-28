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
        var tracks = [];

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
                        tracks = stream.getTracks();

                        d.resolve(stream);
                    }, function (e) {
                        d.reject(e);
                    });
                    return d.promise;
                }
            },
            leave: function() {
                for (var i= 0, len=tracks.length ; i<len ; i++) {
                    tracks[i].stop();
                }

                stream = undefined;
            }
        };
    }

    angular.module('junnyria.stream').service('streamService', streamService);
})();