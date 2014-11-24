'use strict';


module.exports = function() {
    return {
        restrict: 'E',
        templateUrl: 'lib/directives/filePickerButton/filePickerButton.html',
        controller: 'FilePickerButtonCtrl',
        scope: {
            onPick: '&'
        }
    };
};
