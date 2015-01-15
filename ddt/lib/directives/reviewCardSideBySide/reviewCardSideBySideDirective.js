'use strict';


module.exports = function() {
    return {
        restrict: 'E',
        templateUrl: 'lib/directives/reviewCardSideBySide/reviewCardSideBySide.html',
        replace: true,
        controller: 'ReviewCardSideBySideCtrl',
        scope: {
            fontParameters: '=',
            comparisonGroup: '=',
            cardType: '='
        }
    };
};
