/**
 * @module
 * @author ftheomunhoz
 * @description
 *
 */

(function () {
    "use strict";

    var appSettings = {
        streamEndpoint: 'https://junnyria-stream.herokuapp.com'
    };

    angular.module('junnyria').constant("appSettings", appSettings);
})();