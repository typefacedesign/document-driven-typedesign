'use strict';

var angular = require('../angular');
var _ = require('lodash');


angular.module('ddt').factory('fontFamilyCollection', function(fontFaceCollection) {
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
        _.each(family.fonts, function(font) {
            fontFaceCollection.add(font);
        });

        fontFamilies.push(family);
        fontFamiliesCounter++;
    };

    var remove = function(family) {
        _.pull(fontFamilies, family);
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
        remove: remove,
        count: count,
        generatePlaceholderName: generatePlaceholderName
    };
});
