'use strict';

var angular = require('../angular');
var _ = require('lodash');


var ddt = angular.module('ddt');


ddt.constant('FontFamilyCollectionEvents', {
    ADDED: 'fontFamilyCollection:added'
});


ddt.factory('fontFamilyCollection', function($rootScope, FontFamilyCollectionEvents) {
    var fontFamilies = [];

    // When adding a new family, we name it "Font Family X" by default,
    // where X is an integer. fontFamiliesCounter is X, and it's bumped
    // up every time a new family is added.
    var fontFamiliesCounter = 1;

    var families = function() {
        // TODO: expose this read-only.
        return fontFamilies;
    };

    var add = function(family) {
        fontFamilies.push(family);
        $rootScope.$broadcast(FontFamilyCollectionEvents.ADDED);
        fontFamiliesCounter++;
    };

    var count = function() {
        return _.size(fontFamilies);
    };

    var generatePlaceholderName = function() {
        return 'New Family ' + fontFamiliesCounter.toString();
    };

    return {
        families: families,
        add: add,
        count: count,
        generatePlaceholderName: generatePlaceholderName
    };
});
