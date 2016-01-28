/**
 * @module
 * @author ftheomunhoz
 * @description
 *
 */

(function () {
    "use strict";

    var appSettings = {
        iceEndpoint: 'stun:stun.l.google.com:19302',
        masterRoom: 'MASTER-ROOM',
        //streamEndpoint: 'https://junnyria-stream.herokuapp.com'
        streamEndpoint: 'http://localhost:9010'
    };

    angular.module('junnyria').constant("appSettings", appSettings);
})();