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
        };

        vm.masterImage = {
            large: '/assets/images/map.jpg',
            small: '/assets/images/medusa.png'
        };

        vm.panelList = [
            {
                title: 'GERAL'
            },
            {
                title: 'ATRIBUTOS'
            },
            {
                title: "HABILIDADES"
            }
        ];

        vm.selectedTitle = "";

        vm.togglePanel = function(list, index) {
            for (var i=0 ; i<list.length ; i++) {
                list[i].active = false;
            }

            list[index].active = true;
            vm.selectedTitle = list[index].title;
        };

        vm.togglePanel(vm.panelList, 0);
    }

    angular.module('junnyria.player').controller("playerController", playerController);
})();