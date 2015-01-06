'use strict';


module.exports = function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'lib/directives/fontCardLetters/fontCardLetters.html',
        controller: 'FontCardLettersCtrl',
        scope: {
            fontFamily: '=',
            fontSize: '=?'
        }
    };
};
