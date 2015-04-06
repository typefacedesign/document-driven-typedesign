'use strict';

var angular = require('../angular');
var _ = require('lodash');


angular.module('ddt').factory('DEFAULT_FONT_PARAMETERS', function(FontCardTypes, FontCases,
                                                                  TextAlignment, DEFAULT_TEXT_COLOR,
                                                                  DEFAULT_BACKGROUND_COLOR) {
    var fontParameters = {};

    fontParameters[FontCardTypes.LETTER] = {
        parameterSetId: FontCardTypes.LETTER,
        fontSize: 24,
        color: DEFAULT_TEXT_COLOR,
        backgroundColor: DEFAULT_BACKGROUND_COLOR,
        fontCase: FontCases.UNSPECIFIED
    };

    fontParameters[FontCardTypes.WORD] = {
        parameterSetId: FontCardTypes.WORD,
        fontSize: 32,
        letterSpacing: 0,
        color: DEFAULT_TEXT_COLOR,
        backgroundColor: DEFAULT_BACKGROUND_COLOR,
        fontCase: FontCases.UNSPECIFIED,
        textAlignment: TextAlignment.LEFT
    };

    fontParameters[FontCardTypes.SENTENCE] = {
        parameterSetId: FontCardTypes.SENTENCE,
        fontSize: 24,
        letterSpacing: 0,
        wordSpacing: 0,
        color: DEFAULT_TEXT_COLOR,
        backgroundColor: DEFAULT_BACKGROUND_COLOR,
        fontCase: FontCases.UNSPECIFIED,
        textAlignment: TextAlignment.LEFT
    };

    fontParameters[FontCardTypes.PARAGRAPH] = {
        parameterSetId: FontCardTypes.PARAGRAPH,
        fontSize: 16,
        lineHeight: 1.2,
        letterSpacing: 0,
        wordSpacing: 0,
        color: DEFAULT_TEXT_COLOR,
        backgroundColor: DEFAULT_BACKGROUND_COLOR,
        fontCase: FontCases.UNSPECIFIED,
        textAlignment: TextAlignment.LEFT
    };

    fontParameters[FontCardTypes.RICH_TEXT] = {
        parameterSetId: FontCardTypes.RICH_TEXT,
        fontSize: 16,
        lineHeight: 1.2,
        letterSpacing: 0,
        wordSpacing: 0,
        color: DEFAULT_TEXT_COLOR,
        backgroundColor: DEFAULT_BACKGROUND_COLOR,
        fontCase: FontCases.UNSPECIFIED,
        textAlignment: TextAlignment.LEFT
    };

    fontParameters[FontCardTypes.LAYOUT] = {
        parameterSetId: FontCardTypes.LAYOUT
    };

    return fontParameters;
});
