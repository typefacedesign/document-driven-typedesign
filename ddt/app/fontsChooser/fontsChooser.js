'use strict';


module.exports = function($scope, $localForage, FontCardTypes, fontParameters) {
    var init = function() {
        $scope.cardType = localStorage.getItem('cardType') || FontCardTypes.WORD;
        $scope.fontParameters = fontParameters.current;
    };

    init();
};
