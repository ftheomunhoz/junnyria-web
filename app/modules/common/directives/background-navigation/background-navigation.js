/**
 * @module
 * @author ftheomunhoz
 * @description
 *
 */

(function () {
    "use strict";

    function link(scope, el) {
        var parent = el.parent();
        var pan = 5;

        scope.moveLeft = function () {
            var xy = getXY(parent);
            xy.x = xy.x < pan ? 0 : xy.x - pan;

            setXY(parent, xy);
        };

        scope.moveRight = function () {
            var xy = getXY(parent);
            xy.x = xy.x + pan > 100 ? 100 : xy.x + pan;

            setXY(parent, xy);
        };

        scope.moveUp = function () {
            var xy = getXY(parent);
            xy.y = xy.y < pan ? 0 : xy.y - pan;

            setXY(parent, xy);
        };

        scope.moveDown = function () {
            var xy = getXY(parent);
            xy.y = xy.y + pan > 100 ? 100 : xy.y + pan;

            setXY(parent, xy);
        };

        var getXY = function (element) {
            var css = element.css('backgroundPosition').replace(/%/g, '').split(' ');

            return {
                x: parseInt(css[0]),
                y: parseInt(css[1])
            }
        };

        var setXY = function (element, xy) {
            element.css('backgroundPosition', xy.x + '%' + ' ' + xy.y + '%');
        };
    }

    function backgroundNavigationDirective() {
        return {
            restrict: 'E',
            replace: true,
            scope: false,
            templateUrl: 'modules/common/directives/background-navigation/background-navigation.html',
            link: link
        }
    }

    angular.module('junnyria.common').directive('backgroundNavigation', backgroundNavigationDirective);
})();