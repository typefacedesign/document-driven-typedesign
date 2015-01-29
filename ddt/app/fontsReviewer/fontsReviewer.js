'use strict';

var _ = require('lodash');


module.exports = function($scope, $routeParams, $location, fontFamilyCollection,
                          fontParameters, FontCardTypes, FontComparisonTypes, comparisonMatrix) {
    var init = function() {
        $scope.cardType = $routeParams.cardType || FontCardTypes.WORD;
        $scope.comparisonType = $routeParams.comparisonType || FontComparisonTypes.SIDE_BY_SIDE;
        $scope.fontParameters = fontParameters.current;
        $scope.FontComparisonTypes = FontComparisonTypes;

        $scope.$watch(function() {
            return comparisonMatrix.comparisonMatrix();
        }, function() {
            $scope.comparisonMatrix = comparisonMatrix.comparisonMatrix();
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

    init();
};
