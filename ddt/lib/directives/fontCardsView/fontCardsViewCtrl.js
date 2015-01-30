'use strict';


module.exports = function ($scope, FontCardTypes, fontFamilyCollection, TestWords, TestSentences,
                           TestParagraphs, fontParameters, testStrings) {
    var init = function() {
        $scope.FontCardTypes = FontCardTypes;
        $scope.families = fontFamilyCollection.families();
        $scope.fontParameters = fontParameters.current;
        $scope.testStrings = testStrings;
    };

    $scope.isType = function(typeToCheck) {
        return $scope.fontCardType === typeToCheck;
    };

    $scope.cardSizeClass = function() {
        if ($scope.fontCardType === FontCardTypes.SENTENCE) {
            return 'ddt-font-card-full';
        } else if ($scope.fontCardType === FontCardTypes.LAYOUT) {
            return 'ddt-font-card-half';
        } else {
            return 'ddt-font-card-third';
        }
    };

    init();
};
