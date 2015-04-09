'use strict';

var _ = require('lodash');


module.exports = function($scope, $location, $timeout, fontFamilyCollection, fontParameters,
                          FontCardTypes, FontComparisonTypes, comparisonMatrix, LocalStorageKeys) {
    var init = function() {
        if (comparisonMatrix.familyCount() < 2) {
            // TODO: display an alert before redirecting.
            $location.path('/choose');
        }

        $scope.cardType = localStorage.getItem(LocalStorageKeys.LAST_USED_CARD_TYPE) || FontCardTypes.WORD;
        $scope.comparisonType = localStorage.getItem(LocalStorageKeys.LAST_USED_COMPARISON_TYPE) ||
                                FontComparisonTypes.SIDE_BY_SIDE;
        $scope.fontParameters = fontParameters.current;
        $scope.FontComparisonTypes = FontComparisonTypes;
        $scope.comparisonMatrix = comparisonMatrix;

        var TOGGLE_FONT_INTERVAL = 1000;
        $scope.toggle = true;
        var toggleFont = function() {
            $scope.toggle = !$scope.toggle;
            $timeout(toggleFont, TOGGLE_FONT_INTERVAL);
        };
        $timeout(toggleFont, TOGGLE_FONT_INTERVAL);
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
