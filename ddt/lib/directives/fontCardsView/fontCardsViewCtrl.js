'use strict';


module.exports = function ($scope, FontCardTypes, fontFamilyCollection, TestParagraphs, TestSentences) {
    $scope.FontCardTypes = FontCardTypes;
    $scope.TestParagraphs = TestParagraphs;
    $scope.TestSentences = TestSentences;
    $scope.families = fontFamilyCollection.families();

    $scope.isType = function(typeToCheck) {
        return $scope.fontCardType === typeToCheck;
    };
};
