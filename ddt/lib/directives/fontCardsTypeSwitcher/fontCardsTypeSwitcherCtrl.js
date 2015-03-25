'use strict';


module.exports = function($scope, FontCardTypes) {
    $scope.FontCardTypes = FontCardTypes;

    $scope.switchCardType = function(type) {
        $scope.cardType = type;
        localStorage.setItem('ddt:lastUsedCardType', $scope.cardType);
    };

    $scope.isType = function(type) {
        return $scope.cardType === type;
    };
};
