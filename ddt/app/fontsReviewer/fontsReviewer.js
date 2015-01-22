'use strict';

var _ = require('lodash');


module.exports = function($scope, $routeParams, $location, fontFamilyCollection,
                          fontParameters, FontCardTypes, FontComparisonTypes, comparisonMatrices) {
    var init = function() {
        $scope.cardType = $routeParams.cardType || FontCardTypes.WORD;
        $scope.comparisonType = $routeParams.comparisonType || FontComparisonTypes.OPACITY;
        $scope.fontParameters = fontParameters.current;
        $scope.FontComparisonTypes = FontComparisonTypes;

        // NOTE: this comparison matrix will soon be stored in the comparisonMatrices service.
        $scope.comparisonMatrix = fontFamilyCollection.comparisonMatrix();
        $scope.comparisonMatrices = comparisonMatrices.comparisonMatrices();

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

    $scope.addToOpacityComparison = function(fonts) {
        comparisonMatrices.comparisonMatrices()[FontComparisonTypes.OPACITY].push(fonts);
    };

    init();
};
