'use strict';


module.exports = function($scope, $routeParams, $location, FontCardTypes, fontParameters) {
    $scope.cardType = $routeParams.cardType || FontCardTypes.WORD;
    $scope.fontParameters = fontParameters;
};
