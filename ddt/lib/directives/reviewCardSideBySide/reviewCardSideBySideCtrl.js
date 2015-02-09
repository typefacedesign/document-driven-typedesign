/* globals angular */
'use strict';


module.exports = function($scope, fontFamilyCollection, FontCardTypes, testStrings, LETTERS,
                          comparisonMatrix) {
    var init = function() {
        $scope.letters = LETTERS;
        $scope.FontCardTypes = FontCardTypes;
        $scope.testStrings = testStrings;
        $scope.comparisonMatrix = comparisonMatrix;
    };

    init();
};
