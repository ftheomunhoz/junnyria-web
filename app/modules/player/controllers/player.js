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

        vm.panelFocusList = [
            {
                id: "panelLog",
                title: "LOG DE ATIVIDADES"
            },
            {
                id: "panelAttention",
                title: "PONTO DE ATENÇÃO"
            }
        ];

        vm.panelFocus = vm.panelFocusList[0];

        vm.masterImage = {
            large: '/assets/images/map.jpg',
            small: '/assets/images/medusa.png'
        };
    }

    angular.module('junnyria.player').controller("playerController", playerController);
})();