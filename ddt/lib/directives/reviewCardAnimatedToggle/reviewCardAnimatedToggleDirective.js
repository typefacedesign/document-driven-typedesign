'use strict';


module.exports = function() {
    return {
        restrict: 'E',
        templateUrl: 'lib/directives/reviewCardAnimatedToggle/reviewCardAnimatedToggle.html',
        controller: 'ReviewCardAnimatedToggleCtrl',
        scope: {
            fontParameters: '=',
            cardType: '=',
            font1: '=',
            font2: '='
        }
    };
};
