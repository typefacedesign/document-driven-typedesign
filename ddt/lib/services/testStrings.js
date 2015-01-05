'use strict';

var angular = require('../angular');


angular.module('ddt').factory('testStrings', function(FontCardTypes, TestWords, TestSentences, TestParagraphs) {
    var testStrings = {};

    testStrings[FontCardTypes.WORD] = {
        text: TestWords.ARROWROOT
    };

    testStrings[FontCardTypes.SENTENCE] = {
        text: TestSentences.SIX_GUNBOATS
    };

    testStrings[FontCardTypes.PARAGRAPH] = {
        text: TestParagraphs.INSECT_BITE,
        multiline: true
    };

    return testStrings;
});
