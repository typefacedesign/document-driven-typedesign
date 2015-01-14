'use strict';

var _ = require('lodash');


module.exports = function($scope, $routeParams, $location, fontFamilyCollection,
                          fontParameters, FontCardTypes, FontComparisonTypes) {
    var init = function() {
        $scope.cardType = $routeParams.cardType || FontCardTypes.WORD;
        $scope.comparisonType = $routeParams.comparisonType || FontComparisonTypes.SIDE_BY_SIDE;
        $scope.comparisonMatrix = fontFamilyCollection.comparisonMatrix();
        $scope.fontsInComparisonMatrix = fontFamilyCollection.fontsInComparisonMatrix();
        $scope.fontParameters = fontParameters.current[FontCardTypes.LETTER];
        $scope.FontComparisonTypes = FontComparisonTypes;

        // TODO: make this a constant.
        $scope.letters = 'abcdefghjklmnopqrstuvwxyz'.split('');

        $scope.$watch(function() {
            return fontFamilyCollection.comparisonMatrix();
        }, function() {
            $scope.comparisonMatrix = fontFamilyCollection.comparisonMatrix();
        });
    };

    $scope.swapFontsToCompare = function(font1, font2) {
        fontFamilyCollection.swapFontsToCompare(font1, font2);
    };

    $scope.isCurrentComparison = function(comparison) {
        return comparison === $scope.comparisonType;
    };

    $scope.switchComparisonType = function(comparisonType) {
        $scope.comparisonType = comparisonType;
        $location.search('comparisonType', $scope.comparisonType);
    };

    $scope.replaceUnderscores = function(text) {
        return text.replace(/_/g, ' ');
    };

    init();
};
