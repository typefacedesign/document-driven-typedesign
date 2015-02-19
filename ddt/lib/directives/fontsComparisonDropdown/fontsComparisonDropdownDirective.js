'use strict';

var $ = require('jquery');


module.exports = function() {
    return {
        restrict: 'E',
        templateUrl: 'lib/directives/fontsComparisonDropdown/fontsComparisonDropdown.html',
        controller: 'FontsComparisonDropdownCtrl',
        link: function(scope, element, attrs, controllers) {
            var menu = element.find('.ddt-fonts-comparison-dropdown')[0];

            $(document).on('click.fontParameterMenu', function(e) {
                if (scope.menuVisible && !$.contains(menu, e.target)) {
                    scope.$apply(function() {
                        scope.toggleMenu();
                    });
                }
            });
        }
    };
};
