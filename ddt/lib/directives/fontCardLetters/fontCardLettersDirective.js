'use strict';


module.exports = function() {
    return {
        restrict: 'E',
        templateUrl: 'lib/directives/fontCardLetters/fontCardLetters.html',
        controller: 'FontCardLettersCtrl',
        scope: {
            fontFamily: '=',
            fontSize: '=?'
        }
    };
};
