/* globals angular */
'use strict';


module.exports = function() {
    return {
        restrict: 'E',
        templateUrl: 'lib/directives/navbar/navbar.html',
        controller: 'NavbarCtrl',
        link: function(scope, element, attributes) {
            element.find('[data-toggle="popover"]').on('mouseover', function() {
                angular.element(this).popover('show');
            });

            element.find('[data-toggle="popover"]').on('mouseout', function() {
                angular.element(this).popover('hide');
            });
        }
    };
};
