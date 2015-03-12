'use strict';

var angular = require('../angular');
var _ = require('lodash');


angular.module('ddt').factory('fontParameters', function($rootScope, DEFAULT_FONT_PARAMETERS) {
    // This service keeps track of font parameters in the choose fonts view.
    // fontSize, letterSpacing, wordSpacing are in px. lineHeight is unitless.
    var fontParameters = JSON.parse(localStorage.getItem('fontParameters'));

    if (fontParameters === null) {
        fontParameters = angular.copy(DEFAULT_FONT_PARAMETERS);
    }

    var resetParameters = function(parameterSetId) {
        _.each(_.keys(DEFAULT_FONT_PARAMETERS[parameterSetId]), function(key) {
            fontParameters[parameterSetId][key] = DEFAULT_FONT_PARAMETERS[parameterSetId][key];
        });
    };

    $rootScope.$watch(function() {
        return fontParameters;
    }, function() {
        localStorage.setItem('fontParameters', JSON.stringify(fontParameters));
    }, true);

    return {
        resetParameters: resetParameters,
        defaults: DEFAULT_FONT_PARAMETERS,
        current: fontParameters
    };
});
