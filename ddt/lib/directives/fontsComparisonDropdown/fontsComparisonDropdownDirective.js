'use strict';

var $ = require('jquery');


module.exports = function() {
    return {
        restrict: 'E',
        templateUrl: 'lib/directives/fontsComparisonDropdown/fontsComparisonDropdown.html',
        controller: 'FontsComparisonDropdownCtrl',
        link: function(scope, element, attrs, controllers) {
            var menu = element.find('.ddt-fonts-comparison-dropdown').get(0);

            $(document).on('click.fontParameterMenu', function(e) {
                if (scope.menuVisible && !$.contains(menu, e.target)) {
                    scope.$apply(function() {
                        scope.toggleMenu();
                    });
                }
            });

            scope.adjustPosition = function() {
                var menuDimensions = menu.getBoundingClientRect();
                var menuContent = $(menu).find('.ddt-fonts-comparison-dropdown-content');
                var menuContentDimensions = menuContent.get(0).getBoundingClientRect();

                var left = menuDimensions.right - menuContentDimensions.width;
                if (menuContentDimensions.left !== left && menuContentDimensions.left !== 0) {
                    menuContent.css('left', left);
                }
            };
        }
    };
};
