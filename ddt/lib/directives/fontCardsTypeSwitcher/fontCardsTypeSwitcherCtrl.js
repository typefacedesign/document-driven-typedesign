'use strict';


module.exports = function($scope, FontCardTypes, LocalStorageKeys) {
    $scope.FontCardTypes = FontCardTypes;

    $scope.switchCardType = function(type) {
        $scope.cardType = type;
        localStorage.setItem(LocalStorageKeys.LAST_USED_CARD_TYPE, $scope.cardType);
    };

    $scope.isType = function(type) {
        return $scope.cardType === type;
    };
};
