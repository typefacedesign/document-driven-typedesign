'use strict';


module.exports = function($timeout) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'lib/directives/fontCardLetters/fontCardLetters.html',
        controller: 'FontCardLettersCtrl',
        scope: {
            fontFamily: '=',
            fontSize: '=?'
        },
        link: function(scope, element, attributes) {
            $timeout(function() {
                element.find('[data-toggle="tooltip"]').tooltip();
            }, 0);
        }
    };
};
