/**
 * @module
 * @author ftheomunhoz
 * @description
 *
 */


'use strict';

angular.module('junnyria.stream')
    .directive('videoPlayer', function ($sce) {
        return {
            templateUrl: 'modules/stream/directives/stream-video-player/stream-video-player.html',
            restrict: 'E',
            replace: true,
            scope: {
                vidSrc: '@'
            },
            link: function (scope) {
                scope.trustSrc = function () {
                    if (!scope.vidSrc) {
                        return undefined;
                    }
                    return $sce.trustAsResourceUrl(scope.vidSrc);
                };
            }
        };
    });