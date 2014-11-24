'use strict';


module.exports = function () {
    return {
        restrict: 'E',
        templateUrl: 'lib/directives/fontRenderer/fontRenderer.html',
        scope: {
            font: '=',
            text: '@?'
        },
        link: function(scope, element, attrs, controllers) {
            scope.text = scope.text || 'Comfortably';

            var contentDiv = element.find('.ddt-font-renderer-canvas-wrapper');
            var canvas = angular.element('<canvas height="35"></canvas>');
            contentDiv.append(canvas);
            scope.font.draw(canvas[0].getContext('2d'), scope.text, 0, 30, 24);
        }
    };
};
