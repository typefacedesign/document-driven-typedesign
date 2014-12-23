'use strict';

var angular = require('../angular');


angular.module('ddt').factory('fontParameters', function(FontCardTypes, DEFAULT_TEXT_COLOR) {
    // This service keeps track of font parameters in the choose fonts view.
    // fontSize, letterSpacing, wordSpacing are in px. lineHeight is unitless.
    var fontParameters = {};

    fontParameters[FontCardTypes.LETTER] = {
        fontSize: 24,
        color: DEFAULT_TEXT_COLOR
    };

    fontParameters[FontCardTypes.WORD] = {
        fontSize: 32,
        letterSpacing: 'normal',
        color: DEFAULT_TEXT_COLOR
    };

    fontParameters[FontCardTypes.SENTENCE] = {
        fontSize: 24,
        letterSpacing: 'normal',
        wordSpacing: 'normal',
        color: DEFAULT_TEXT_COLOR
    };

    fontParameters[FontCardTypes.PARAGRAPH] = {
        fontSize: 16,
        lineHeight: 1.2,
        letterSpacing: 'normal',
        wordSpacing: 'normal',
        color: DEFAULT_TEXT_COLOR
    };

    return fontParameters;
});
