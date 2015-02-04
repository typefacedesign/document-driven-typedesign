/* globals angular */
'use strict';


module.exports = function($scope, fontFamilyCollection, FontCardTypes, testStrings, LETTERS) {
    var init = function() {
        $scope.letters = LETTERS;
        $scope.FontCardTypes = FontCardTypes;
        $scope.testStrings = testStrings;
    };

    init();
};
