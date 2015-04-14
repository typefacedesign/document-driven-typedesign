/* globals angular */
'use strict';


module.exports = function ($timeout) {
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
            allowHtml: '=?',
            editable: '=?'
        }
    };
};
