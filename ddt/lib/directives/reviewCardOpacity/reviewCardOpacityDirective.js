'use strict';


module.exports = function() {
    return {
        restrict: 'E',
        templateUrl: 'lib/directives/reviewCardOpacity/reviewCardOpacity.html',
        controller: 'ReviewCardOpacityCtrl',
        scope: {
            fontParameters: '=',
            cardType: '=',
            font1: '=',
            font2: '='
        }
    };
};
