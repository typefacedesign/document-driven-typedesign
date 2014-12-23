'use strict';

var $ = require('jquery');


module.exports = function() {
    return {
        restrict: 'E',
        templateUrl: 'lib/directives/fontParametersMenu/fontParametersMenu.html',
        controller: 'FontParametersMenuCtrl',
        scope: {
            parameterSet: '='
        },
        link: function(scope, element, attrs, controllers) {
            var menu = element.find('.ddt-font-parameters-menu')[0];

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
