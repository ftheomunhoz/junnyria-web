/**
 * @module
 * @author ftheomunhoz
 * @description
 *
 */

(function () {
    "use strict";

    var appSettings = {
        streamEndpoint: 'http://localhost:9010',

        iceEndpoint: 'stun:stun.l.google.com:19302',
        masterRoom: 'MASTER-ROOM',

        socialLogin: {
            FACEBOOK: 'facebook',
            GOOGLE: 'google-oauth2'
        }
    };

    angular.module('junnyria').constant("appSettings", appSettings);
})();