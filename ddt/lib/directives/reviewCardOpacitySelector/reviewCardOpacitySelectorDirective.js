'use strict';


module.exports = function() {
    return {
        restrict: 'E',
        templateUrl: 'lib/directives/reviewCardOpacitySelector/reviewCardOpacitySelector.html',
        controller: 'ReviewCardOpacitySelectorCtrl',
        scope: {
            onSelect: '=',
            allowMore: '=?'
        }
    };
};
