'use strict';


module.exports = function() {
    return {
        restrict: 'E',
        templateUrl: 'lib/directives/fontTestForm/fontTestForm.html',
        controller: 'FontTestFormCtrl',
        scope: {
            test: '='
        }
    };
};
