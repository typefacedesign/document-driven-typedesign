'use strict';


module.exports = function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'lib/directives/fontCardSimple/fontCardSimple.html',
        controller: 'FontCardSimpleCtrl',
        scope: {
            fontFamily: '=',
            fontParameters: '=',
            text: '=',
            allowHtml: '=?'
        }
    };
};
