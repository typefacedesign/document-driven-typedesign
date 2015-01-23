'use strict';

var angular = require('../angular');
var _ = require('lodash');


angular.module('ddt').factory('fontFamilyCollection', function() {
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

    var findByName = function(name) {
        return _.find(fontFamilies, function(family) {
            return family.name === name;
        });
    };

    return {
        families: families,
        add: add,
        remove: remove,
        count: count,
        findByName: findByName,
        generatePlaceholderName: generatePlaceholderName
    };
});
