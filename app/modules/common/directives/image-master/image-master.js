/**
 * @module
 * @author ftheomunhoz
 * @description
 *
 */

(function () {
    "use strict";

    function controller() {
        var vm = this;

        vm.CAMERA = 'CAMERA';
        vm.MAP = 'MAP';

        vm.showCameraMap = vm.CAMERA;

        vm.toggleCameraMap = function() {
            if (vm.showCameraMap === vm.CAMERA) {
                vm.showCameraMap = vm.MAP;
                vm.masterImage = "";
            } else {
                vm.showCameraMap = vm.CAMERA;
                vm.masterImage = oldMasterImage;
            }
        };

        oldMasterImage = vm.masterImage;
    }


    var oldMasterImage;

    function imageMasterDirective() {
        return {
            restrict: 'E',
            replace: true,
            scope: {},
            templateUrl: 'modules/common/directives/image-master/image-master.html',
            controller: controller,
            controllerAs: 'vm',
            bindToController: {
                masterImage: '='
            }
        }
    }

    angular.module('junnyria.common').directive('imageMaster', imageMasterDirective);
})();