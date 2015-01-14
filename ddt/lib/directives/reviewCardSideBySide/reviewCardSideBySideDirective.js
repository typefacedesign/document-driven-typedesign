'use strict';


module.exports = function() {
    return {
        restrict: 'E',
        templateUrl: 'lib/directives/reviewCardSideBySide/reviewCardSideBySide.html',
        controller: 'ReviewCardSideBySideCtrl',
        scope: {
            fontParameters: '=',
            comparisonGroup: '='
        }
    };
};
