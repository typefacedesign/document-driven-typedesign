'use strict';

var angular = require('../angular');


angular.module('ddt').factory('fontParameters', function(FontCardTypes) {
    // This service keeps track of font parameters in the choose fonts view.
    // fontSize, letterSpacing, wordSpacing are in px. lineHeight is unitless.
    var fontParameters = {};

    fontParameters[FontCardTypes.LETTER] = {
        fontSize: 24
    };

    fontParameters[FontCardTypes.WORD] = {
        fontSize: 32,
        letterSpacing: 'normal'
    };

    fontParameters[FontCardTypes.SENTENCE] = {
        fontSize: 24,
        letterSpacing: 'normal',
        wordSpacing: 'normal'
    };

    fontParameters[FontCardTypes.PARAGRAPH] = {
        fontSize: 16,
        lineHeight: 1.2,
        letterSpacing: 'normal',
        wordSpacing: 'normal'
    };

    return fontParameters;
});
