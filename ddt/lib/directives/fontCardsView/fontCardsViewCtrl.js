'use strict';


module.exports = function ($scope, FontCardTypes, fontFamilyCollection, TestWords, TestSentences,
                           TestParagraphs, fontParameters) {
    $scope.FontCardTypes = FontCardTypes;
    $scope.TestWords = TestWords;
    $scope.TestSentences = TestSentences;
    $scope.TestParagraphs = TestParagraphs;
    $scope.families = fontFamilyCollection.families();
    $scope.fontParameters = fontParameters;

    $scope.isType = function(typeToCheck) {
        return $scope.fontCardType === typeToCheck;
    };
};
