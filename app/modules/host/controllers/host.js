/**
 * @module
 * @author ftheomunhoz
 * @description
 *
 */

(function(){
    "use strict";

    function hostController(hostService, hostFactory) {
        var vm = this;

        vm.charList = undefined;

        hostService.getCharList().then(function(data) {
            vm.charList = hostFactory.charListToModel(data);
        }, function(err) {
            //TODO: Handle error
            console.log(err);
        })
    }

    angular.module('junnyria.host').controller("hostController", hostController);
})();