'use strict';


module.exports = function() {
    return {
        restrict: 'E',
        templateUrl: 'lib/directives/matrixSwapDropdown/matrixSwapDropdown.html',
        replace: true,
        controller: 'MatrixSwapDropdownCtrl',
        scope: {
            font: '='
        }
    };
};
