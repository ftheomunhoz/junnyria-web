/**
 * @module
 * @author ftheomunhoz
 * @description
 *
 */

(function () {
    "use strict";

    function playerController(activeUserFactory) {
        var vm = this;

        var activeUser = activeUserFactory.getActiveUser();

        vm.realName = activeUser.given_name;


        //MOCKS
        vm.eventList = [];



        vm.player = {
            avatar: '/assets/images/wizard.png'
        };

        vm.masterImage = {
            large: '/assets/images/map.jpg',
            small: [
                {
                    src: '/assets/images/medusa.png',
                    name: 'Medusa'
                },
                {
                    src: '/assets/images/Dragon.jpg',
                    name: 'Dragon'
                }
            ]
        };

        vm.attentionIndex = 0;

        vm.moveAttentionLeft = function () {
            vm.attentionIndex = vm.attentionIndex <= 1 ? 0 : vm.attentionIndex - 1;
        };

        vm.moveAttentionRight = function () {
            vm.attentionIndex = vm.attentionIndex >= vm.masterImage.small.length - 1 ? vm.masterImage.small.length - 1 : vm.attentionIndex + 1;
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

        vm.togglePanel = function (list, index) {
            for (var i = 0; i < list.length; i++) {
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

        vm.magicList = [
            {
                name: "Estaca Hemática",
                type: "Trevas",
                description: "Mágica de dano; 1d20 + 1d10 perfurante"
            },
            {
                name: "Invisibilidade",
                type: "Trevas",
                description: "Considera que todos à sua volta estão Cegos"
            },
            {
                name: "Teletransporte Simples",
                type: "Água",
                description: "Transporta o conjurador a um local a vista"
            }
        ];

        vm.magicTypeList = [
            {
                id: 'darkness',
                type: "Trevas",
                count: 2,
                percent: 20
            },
            {
                id: 'water',
                type: "Água",
                count: 1,
                percent: 10
            }
        ];

        vm.equipmentList = [
            {
                name: "Mala de Ferramentas",
                value: 0,
                description: "Equipamento dos nascidos em Teka; Concede um bônus de +2 em testes de Desarmar Armadilhas"
            },
            {
                name: "Amuleto de Siberious",
                value: 0,
                description: "Equipamento dos devotos de Siberious; Concede um bônus de +2 em testes de Operar Mecanismos"
            }
        ];
    }

    angular.module('junnyria.player').controller("playerController", playerController);
})();