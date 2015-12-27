/**
 * @module
 * @author ftheomunhoz
 * @description
 *
 */

(function () {
    "use strict";

    var ENTER_KEY = 13;

    function link(scope, el) {
        el.keypress(function (e) {
            if ((angular.isDefined(e.which) && e.which === ENTER_KEY) || (angular.isDefined(e.keyCode) && e.keyCode === ENTER_KEY)) {
                var link = el.get(0).querySelector('a[type=submit]');

                if (angular.isDefined(link)) {
                    link.click();
                    return false;
                }
            }

            return true;
        });
    }

    function anchorSubmitDirective() {
        return {
            restrict: 'A',
            scope: false,
            link: link
        }
    }

    angular.module('junnyria.common').directive('anchorSubmit', anchorSubmitDirective);
})();