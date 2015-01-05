'use strict';


module.exports = function ($scope, FontCardTypes, fontFamilyCollection, TestWords, TestSentences,
                           TestParagraphs, fontParameters, testStrings) {
    var init = function() {
        $scope.FontCardTypes = FontCardTypes;
        $scope.TestWords = TestWords;
        $scope.TestSentences = TestSentences;
        $scope.TestParagraphs = TestParagraphs;
        $scope.families = fontFamilyCollection.families();
        $scope.fontParameters = fontParameters;

        $scope.testWord = testStrings[FontCardTypes.WORD].text;
        $scope.testSentence = testStrings[FontCardTypes.SENTENCE].text;
        $scope.testParagraph = testStrings[FontCardTypes.PARAGRAPH].text;
    };

    $scope.isType = function(typeToCheck) {
        return $scope.fontCardType === typeToCheck;
    };

    init();
};
