'use strict';


module.exports = function($scope, FontCardTypes, fontParameters) {
    $scope.cardType = localStorage.getItem('cardType') || FontCardTypes.WORD;
    $scope.fontParameters = fontParameters.current;
};
