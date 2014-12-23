'use strict';


module.exports = function() {
    return {
        restrict: 'E',
        templateUrl: 'lib/directives/colorPicker/colorPicker.html',
        controller: 'ColorPickerCtrl',
        scope: {
            color: '='
        }
    };
};
