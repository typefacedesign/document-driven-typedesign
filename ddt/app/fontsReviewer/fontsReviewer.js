'use strict';

var _ = require('lodash');


module.exports = function($scope, $routeParams, $location, fontFamilyCollection,
                          fontParameters, FontCardTypes, FontComparisonTypes) {
    var init = function() {
        $scope.cardType = $routeParams.cardType || FontCardTypes.WORD;
        $scope.comparisonType = $routeParams.comparisonType || FontComparisonTypes.SIDE_BY_SIDE;
        $scope.fontParameters = fontParameters.current;
        $scope.FontComparisonTypes = FontComparisonTypes;
        $scope.comparisonMatrix = fontFamilyCollection.comparisonMatrix();

        $scope.opacityComparisonMatrix = [];

        $scope.$watch(function () {
            return fontFamilyCollection.comparisonMatrix();
        }, function () {
            $scope.comparisonMatrix = fontFamilyCollection.comparisonMatrix();
        });
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

    $scope.addToOpacityComparison = function(font1, font2) {
        $scope.opacityComparisonMatrix.push([font1, font2]);
    };

    init();
};
