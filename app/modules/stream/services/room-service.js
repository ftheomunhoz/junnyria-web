/**
 * Created by fabio.munhoz on 27/12/2015.
 */


(function () {
    "use strict";

    function roomService($q, appSettings) {
        var iceConfig = {
                iceServers: [
                    {
                        'url': appSettings.iceEndpoint
                    }
                ]
            },
            peerConnections = {},
            currentId,
            roomId,
            stream,
            connected = false,
            socket = io.connect(appSettings.streamEndpoint);

        function addHandlers(socket) {
            socket.on('peer.connected', function (params) {
                makeOffer(params.id);
            });
            socket.on('peer.disconnected', function (data) {
                api.trigger('peer.disconnected', [data]);
            });
            socket.on('msg', function (data) {
                handleMessage(data);
            });
        }

        function getPeerConnection(id) {
            if (peerConnections[id]) {
                return peerConnections[id];
            }
            var pc = new RTCPeerConnection(iceConfig);
            peerConnections[id] = pc;
            pc.addStream(stream);
            pc.onicecandidate = function (evnt) {
                socket.emit('msg', {by: currentId, to: id, ice: evnt.candidate, type: 'ice'});
            };
            pc.onaddstream = function (evnt) {
                api.trigger('peer.stream', [{
                    id: id,
                    stream: evnt.stream
                }]);
            };
            return pc;
        }

        function makeOffer(id) {
            var pc = getPeerConnection(id);
            pc.createOffer(function (sdp) {
                    pc.setLocalDescription(sdp);
                    socket.emit('msg', {by: currentId, to: id, sdp: sdp, type: 'sdp-offer'});
                }, function (e) {
                    console.error(e);
                },
                {mandatory: {offerToReceiveVideo: true, offerToReceiveAudio: true}});
        }

        function handleMessage(data) {
            var pc = getPeerConnection(data.by);
            switch (data.type) {
                case 'sdp-offer':
                    pc.setRemoteDescription(new RTCSessionDescription(data.sdp), function () {
                        pc.createAnswer(function (sdp) {
                            pc.setLocalDescription(sdp);
                            socket.emit('msg', {by: currentId, to: data.by, sdp: sdp, type: 'sdp-answer'});
                        }, function (e) {
                            console.error(e);
                        });
                    }, function (e) {
                        console.error(e);
                    });
                    break;
                case 'sdp-answer':
                    pc.setRemoteDescription(new RTCSessionDescription(data.sdp), function () {
                    }, function (e) {
                        console.error(e);
                    });
                    break;
                case 'ice':
                    if (data.ice) {
                        pc.addIceCandidate(new RTCIceCandidate(data.ice));
                    }
                    break;
            }
        }

        var api = {
            joinRoom: function (r) {
                if (!connected) {
                    socket.emit('init', {room: r}, function (roomid, id) {
                        currentId = id;
                        roomId = roomid;
                    });
                    connected = true;
                }
            },
            leaveRoom: function() {
                for (var p in peerConnections) {
                    peerConnections[p].close();
                }
            },
            createRoom: function () {
                var d = $q.defer();
                socket.emit('init', null, function (roomid, id) {
                    d.resolve(roomid);
                    roomId = roomid;
                    currentId = id;
                    connected = true;
                });
                return d.promise;
            },
            init: function (s) {
                stream = s;
            }
        };

        EventEmitter.call(api);

        Object.setPrototypeOf(api, EventEmitter.prototype);
        addHandlers(socket);

        return api;
    }

    angular.module('junnyria.stream').service('roomService', roomService);
})();