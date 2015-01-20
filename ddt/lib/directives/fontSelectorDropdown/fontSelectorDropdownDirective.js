'use strict';


module.exports = function() {
    return {
        restrict: 'E',
        templateUrl: 'lib/directives/fontSelectorDropdown/fontSelectorDropdown.html',
        controller: 'FontSelectorDropdownCtrl',
        scope: {
            key: '@',
            onSelect: '=',
            onInit: '=?'
        }
    };
};
