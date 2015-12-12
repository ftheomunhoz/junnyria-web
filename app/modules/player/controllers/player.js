/**
 * @module
 * @author ftheomunhoz
 * @description
 *
 */

(function(){
    "use strict";

    function playerController(){
        var vm = this;

        vm.eventList = [

        ];

        vm.player = {
            avatar: '/assets/images/wizard.png'
        }
    }

    angular.module('junnyria.player').controller("playerController", playerController);
})();