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
            followWidth: '@?',
            text: '=?',
            wrap: '=?',
            allowHtml: '=?',
            editable: '=?'
        },
        link: function(scope, element, attributes) {
            scope.adjustWidth = function() {
                var referenceElt = angular.element('#' + scope.followWidth);

                if (angular.isUndefined(referenceElt)) {
                    return;
                }

                // If the reference element has a width greater than zero,
                // and both elements are visible on screen, adjust the width of
                // the current element.
                if (referenceElt.width() > 0 &&
                    referenceElt.get(0).offsetParent !== null &&
                    element.get(0).offsetParent !== null) {
                    // This breaks if the invokeApply argument is true (which it is by default).
                    // We basically just want a setTimeout without any Angular magic, and this
                    // is how we achieve it.
                    $timeout(function () {
                        if (referenceElt.width() > 0) {
                            element.width(referenceElt.width());
                        }
                    }, 0, false);
                }
            };
        }
    };
};
