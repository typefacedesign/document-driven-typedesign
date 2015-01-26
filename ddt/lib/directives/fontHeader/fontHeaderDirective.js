'use strict';


module.exports = function() {
    return {
        restrict: 'E',
        templateUrl: 'lib/directives/fontHeader/fontHeader.html',
        controller: 'FontHeaderCtrl',
        scope: {
            font: '='
        }
    };
};
