'use strict';


module.exports = function($timeout) {
    return {
        restrict: 'E',
        templateUrl: 'lib/directives/reviewCardSideBySide/reviewCardSideBySide.html',
        replace: true,
        controller: 'ReviewCardSideBySideCtrl',
        scope: {
            fontParameters: '=',
            comparisonGroup: '=',
            cardType: '=',
            index: '='
        },
        link: function(scope, element, attributes) {
            $timeout(function() {
                element.find('[data-toggle="tooltip"]').tooltip();
            });
        }
    };
};
