'use strict';


module.exports = function () {
    return {
        restrict: 'E',
        templateUrl: 'lib/directives/fontCardsView/fontCardsView.html',
        controller: 'FontCardsViewCtrl',
        scope: {
            fontCardType: '@type'
        }
    };
};
