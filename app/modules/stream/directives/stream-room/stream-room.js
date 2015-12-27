/**
 * @module
 * @author ftheomunhoz
 * @description
 *
 */
'use strict';


angular.module('junnyria.stream')
    .directive('streamRoom', function () {
        return {
            templateUrl: 'modules/stream/directives/stream-room/stream-room.html',
            restrict: 'E',
            replace: true,
            scope: {
                roomId: '@'
            },
            controller: function ($sce, streamService, $location, $scope, roomService) {

                if (!window.RTCPeerConnection || !navigator.getUserMedia) {
                    $scope.error = 'WebRTC is not supported by your browser. You can try the app with Chrome and Firefox.';
                    return;
                }

                var stream;

                streamService.get()
                    .then(function (s) {
                        stream = s;
                        roomService.init(stream);
                        stream = URL.createObjectURL(stream);
                        //if (!$scope.roomId) {
                        //    roomService.createRoom()
                        //        .then(function (roomId) {
                        //            $scope.roomId = roomId;
                        //
                        //            roomService.joinRoom($scope.roomId);
                        //        });
                        //} else {
                        //    roomService.joinRoom($scope.roomId);
                        //}

                        roomService.createRoom()
                            .then(function (roomId) {
                                $scope.roomId = roomId;

                                roomService.joinRoom($scope.roomId);
                            });
                    }, function () {
                        $scope.error = 'No audio/video permissions. Please refresh your browser and allow the audio/video capturing.';
                    });
                $scope.peers = [];
                roomService.on('peer.stream', function (peer) {
                    console.log('Client connected, adding new stream');
                    $scope.peers.push({
                        id: peer.id,
                        stream: URL.createObjectURL(peer.stream)
                    });
                });
                roomService.on('peer.disconnected', function (peer) {
                    console.log('Client disconnected, removing stream');
                    $scope.peers = $scope.peers.filter(function (p) {
                        return p.id !== peer.id;
                    });
                });

                $scope.getLocalVideo = function () {
                    return $sce.trustAsResourceUrl(stream);
                };
            }
        };
    });