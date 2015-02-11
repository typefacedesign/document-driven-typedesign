'use strict';

var _ = require('lodash');


module.exports = function($scope, $routeParams, $location, fontFamilyCollection,
                          fontParameters, FontCardTypes, FontComparisonTypes, comparisonMatrix) {
    var init = function() {
        if (comparisonMatrix.familyCount() < 2) {
            // TODO: display an alert before redirecting.
            $location.path('/choose');
        }

        $scope.cardType = $routeParams.cardType || FontCardTypes.WORD;
        $scope.comparisonType = $routeParams.comparisonType || FontComparisonTypes.SIDE_BY_SIDE;
        $scope.fontParameters = fontParameters.current;
        $scope.FontComparisonTypes = FontComparisonTypes;
        $scope.comparisonMatrix = comparisonMatrix;
    };

    $scope.isCurrentComparison = function(comparison) {
        return comparison === $scope.comparisonType;
    };

    $scope.isCardType = function(cardType) {
        return cardType === $scope.cardType;
    };

    $scope.replaceUnderscores = function(text) {
        return text.replace(/_/g, ' ');
    };

    init();
};
