'use strict';


module.exports = function() {
    return {
        restrict: 'E',
        controller: 'FontCardTitlebarCtrl',
        templateUrl: 'lib/directives/fontCardTitlebar/fontCardTitlebar.html',
        link: function(scope, element, attributes) {
            // Initialize tooltips.
            element.find('[data-toggle="tooltip"]').tooltip();
        }
    };
};
