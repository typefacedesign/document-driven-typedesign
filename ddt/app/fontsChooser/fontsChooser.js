'use strict';


module.exports = function($scope, $localForage, FontCardTypes, fontParameters) {
    var init = function() {
        $scope.cardType = localStorage.getItem('ddt:lastUsedCardType') || FontCardTypes.WORD;
        $scope.fontParameters = fontParameters.current;
    };

    init();
};
