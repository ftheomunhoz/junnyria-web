/**
 * @module
 * @author ftheomunhoz
 * @description
 *
 */

(function(){
    "use strict";
    function videoPlayer($sce) {
        function controller () {
            var vm = this;

            vm.trustSrc = function () {
                return vm.vidSrc ? $sce.trustAsResourceUrl(vm.vidSrc): undefined;
            };
        }

        return {
            templateUrl: 'modules/stream/directives/stream-video-player/stream-video-player.html',
            restrict: 'E',
            replace: true,
            scope: {},
            controller: controller,
            controllerAs: 'vm',
            bindToController: {
                vidSrc: '@'
            }
        }
    }

    angular.module('junnyria.stream').directive('videoPlayer', videoPlayer);
})();