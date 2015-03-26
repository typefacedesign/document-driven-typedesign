'use strict';


module.exports = function($scope, $localForage, FontCardTypes, fontParameters, LocalStorageKeys) {
    var init = function() {
        $scope.cardType = localStorage.getItem(LocalStorageKeys.LAST_USED_CARD_TYPE) ||
                          FontCardTypes.WORD;
        $scope.fontParameters = fontParameters.current;
    };

    init();
};
