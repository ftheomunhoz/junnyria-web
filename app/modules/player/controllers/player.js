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
            },
            {
                title: 'MAGIAS'
            },
            {
                title: 'EQUIPAMENTOS'
            },
            {
                title: "ITENS"
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

        vm.abilityList = [
            {
                name: "Sagacidade",
                cost: 0,
                description: "Talento de ladino; Concede um bônus de +2 em testes de Destreza."
            },
            {
                name: "Intimidação",
                cost: 2,
                description: "Concede um bônus de +3 em testes de intimidar e interrogar."
            },
            {
                name: "Furtividade",
                cost: 2,
                description: "Concede um bônus de +3 em testes de Fuga e Furtividade."
            },
            {
                name: "Reflexos",
                cost: 2,
                description: "Concede um bônus de +1 em testes de Evasão."
            }
        ];
    }

    angular.module('junnyria.player').controller("playerController", playerController);
})();