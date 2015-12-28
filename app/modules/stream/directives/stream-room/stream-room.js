/**
 * @module
 * @author ftheomunhoz
 * @description
 *
 */

(function () {
    "use strict";

    var streamRoom = function(roomService, $timeout) {
        function controller($sce, streamService, appSettings) {

            if (!window.RTCPeerConnection || !navigator.getUserMedia) {
                alert('a');
                console.error('WebRTC is not supported by your browser. You can try the app with Chrome and Firefox.');
                return;
            }

            var vm = this,
                stream;

            vm.showSelf = vm.showSelf || false;
            vm.isMaster = vm.isMaster || true;

            streamService.get(vm.isMaster)
                .then(function (s) {
                    stream = s;
                    roomService.init(stream);
                    stream = URL.createObjectURL(stream);

                    roomService.joinRoom(appSettings.masterRoom);
                }, function () {
                    alert('b');
                    console.error('No audio/video permissions. Please refresh your browser and allow the audio/video capturing.');
                });

            vm.peers = [];

            roomService.on('peer.stream', function (peer) {
                vm.peers.push({
                    id: peer.id,
                    isMaster: peer.isMaster,
                    stream: URL.createObjectURL(peer.stream)
                });
            });

            roomService.on('peer.disconnected', function (peer) {
                vm.peers = vm.peers.filter(function (p) {
                    return p.id !== peer.id;
                });
            });

            vm.getLocalVideo = function () {
                return $sce.trustAsResourceUrl(stream);
            };
        }

        function link(scope) {
            roomService.on('peer.stream', function () {
                $timeout(function() {
                    scope.$apply();
                }, 300);
            });

            roomService.on('peer.disconnected', function () {
                $timeout(function() {
                    scope.$apply();
                }, 300);
            });

            var destroy = scope.$on('$destroy', function() {

                destroy();
            });
        }

        return {
            templateUrl: 'modules/stream/directives/stream-room/stream-room.html',
            restrict: 'E',
            replace: true,
            scope: {},
            controller: controller,
            controllerAs: 'vm',
            bindToController: {
                roomId: '@',
                isMaster: '@',
                showSelf: '@'
            },
            link: link
        };
    };

    angular.module('junnyria.stream').directive('streamRoom', streamRoom);
})();