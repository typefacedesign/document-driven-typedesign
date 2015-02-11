'use strict';

var angular = require('../angular');
var _ = require('lodash');


angular.module('ddt').factory('fontParameters', function(FontCardTypes, DEFAULT_TEXT_COLOR,
                                                         DEFAULT_BACKGROUND_COLOR, FontCases) {
    // This service keeps track of font parameters in the choose fonts view.
    // fontSize, letterSpacing, wordSpacing are in px. lineHeight is unitless.
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
        fontCase: FontCases.UNSPECIFIED
    };

    fontParameters[FontCardTypes.SENTENCE] = {
        parameterSetId: FontCardTypes.SENTENCE,
        fontSize: 24,
        letterSpacing: 0,
        wordSpacing: 0,
        color: DEFAULT_TEXT_COLOR,
        backgroundColor: DEFAULT_BACKGROUND_COLOR,
        fontCase: FontCases.UNSPECIFIED
    };

    fontParameters[FontCardTypes.PARAGRAPH] = {
        parameterSetId: FontCardTypes.PARAGRAPH,
        fontSize: 16,
        lineHeight: 1.2,
        letterSpacing: 0,
        wordSpacing: 0,
        color: DEFAULT_TEXT_COLOR,
        backgroundColor: DEFAULT_BACKGROUND_COLOR,
        fontCase: FontCases.UNSPECIFIED
    };

    fontParameters[FontCardTypes.RICH_TEXT] = {
        parameterSetId: FontCardTypes.RICH_TEXT,
        fontSize: 16,
        lineHeight: 1.2,
        letterSpacing: 0,
        wordSpacing: 0,
        color: DEFAULT_TEXT_COLOR,
        backgroundColor: DEFAULT_BACKGROUND_COLOR,
        fontCase: FontCases.UNSPECIFIED
    };

    fontParameters[FontCardTypes.LAYOUT] = {
        parameterSetId: FontCardTypes.LAYOUT
    };

    var defaults = angular.copy(fontParameters);

    var resetParameters = function(parameterSetId) {
        _.each(_.keys(defaults[parameterSetId]), function(key) {
            fontParameters[parameterSetId][key] = defaults[parameterSetId][key];
        });
    };

    return {
        resetParameters: resetParameters,
        defaults: defaults,
        current: fontParameters
    };
});
