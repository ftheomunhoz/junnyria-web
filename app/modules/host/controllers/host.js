/**
 * @module
 * @author ftheomunhoz
 * @description
 *
 */

(function(){
    "use strict";

    function hostController(hostService, hostFactory, $state, activeCharFactory) {
        var vm = this;

        vm.charList = undefined;

        hostService.getCharList().then(function(data) {
            vm.charList = hostFactory.charListToModel(data);
        }, function(err) {
            //TODO: Handle error
            console.log(err);
        });

        vm.selectChar = function(pos) {
            activeCharFactory.setActiveChar(vm.charList[pos]);
            $state.go('player');
        };
    }

    angular.module('junnyria.host').controller("hostController", hostController);
})();