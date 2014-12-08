'use strict';


module.exports = function() {
    return {
        templateUrl: 'lib/directives/fontCardSimple/fontCardSimple.html',
        controller: 'FontCardSimpleCtrl',
        scope: {
            fontFamily: '=',
            text: '@?',
            allowHtml: '=?'
        }
    };
};
