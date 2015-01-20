'use strict';


module.exports = function () {
    return {
        restrict: 'E',
        templateUrl: 'lib/directives/fontRenderer/fontRenderer.html',
        controller: 'FontRendererCtrl',
        scope: {
            font: '=',
            fontParameters: '=',
            opacity: '=?',
            text: '=?',
            wrap: '=?',
            allowHtml: '=?'
        }
    };
};
