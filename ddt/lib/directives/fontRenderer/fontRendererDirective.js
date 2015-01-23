/* globals angular */
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
            followWidth: '@?',
            text: '=?',
            wrap: '=?',
            allowHtml: '=?'
        },
        link: function(scope, element, attributes) {
            scope.adjustWidth = function() {
                var referenceElt = angular.element('#' + scope.followWidth);

                if (angular.isUndefined(referenceElt)) {
                    return;
                }

                setTimeout(function() {
                    element.width(referenceElt.width());
                }, 0);
            };
        }
    };
};
