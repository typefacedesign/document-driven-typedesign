'use strict';

var angular = require('../angular');
var _ = require('lodash');


angular.module('ddt').factory('fontFamilyCollection', function(fontFaceCollection, ErrorMessages) {
    var fontFamilies = [];
    var fontFamiliesToCompare = [];
    var fontComparisonMatrix;

    // When adding a new family, we name it "Font Family X" by default,
    // where X is an integer. fontFamiliesCounter is X, and it's bumped
    // up every time a new family is added.
    var fontFamiliesCounter = 1;

    var families = function() {
        // TODO: expose this read-only.
        return fontFamilies;
    };

    var familiesToCompare = function() {
        // TODO: expose this read-only.
        return fontFamiliesToCompare;
    };

    var add = function(family) {
        _.each(family.fonts, function(font) {
            fontFaceCollection.add(font);
        });

        fontFamilies.push(family);
        fontFamiliesCounter++;
    };

    var addToComparison = function(familyToCompare) {
        // First ensure the family exists in this collection.
        var familyInCollection = _.find(fontFamilies, function(f) {
            return f === familyToCompare;
        });

        if (!angular.isDefined(familyInCollection)) {
            throw new Error(ErrorMessages.FAMILY_DOES_NOT_EXIST);
        }

        if (!isAddedToComparison(familyToCompare)) {
            fontFamiliesToCompare.push(familyToCompare);
        }

        fontComparisonMatrix = _buildComparisonMatrix(fontFamiliesToCompare);
    };

    var remove = function(family) {
        _.pull(fontFamilies, family);
        removeFromComparison(family);
    };

    var removeFromComparison = function(family) {
        _.pull(fontFamiliesToCompare, family);
        fontComparisonMatrix = _buildComparisonMatrix(fontFamiliesToCompare);
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

    var isAddedToComparison = function(family) {
        return angular.isDefined(_.find(fontFamiliesToCompare, function(f) {
            return f.name === family.name;
        }));
    };

    var comparisonMatrix = function() {
        return fontComparisonMatrix;
    };

    var fontsInComparisonMatrix = function() {
        return _.flatten(fontComparisonMatrix);
    };

    var swapFontsToCompare = function(font1, font2) {
        var _findInComparisonMatrix = function(font) {
            for (var i = 0; i < fontComparisonMatrix.length; i++) {
                for (var j = 0; j < fontComparisonMatrix[i].length; j++) {
                    if (fontComparisonMatrix[i][j] === font) {
                        return [i, j];
                    }
                }
            }

            return -1;
        };

        var index1 = _findInComparisonMatrix(font1);
        var index2 = _findInComparisonMatrix(font2);

        if ((index1 === -1 || index2 === -1) && !(index1 === -1 && index2 === -1)) {
            // If one, but not both, fonts are not in the matrix, then
            // we're not swapping positions within the matrix but simply
            // replacing one font with another.
            if (index1 === -1) {
                fontComparisonMatrix[index2[0]][index2[1]] = font1;
            } else if (index2 === -1) {
                fontComparisonMatrix[index1[0]][index1[1]] = font2;
            }
        } else {
            // Otherwise, do a regular swap.
            fontComparisonMatrix[index1[0]][index1[1]] = font2;
            fontComparisonMatrix[index2[0]][index2[1]] = font1;
        }
    };

    var _buildComparisonMatrix = function(fontFamilies) {
        var minLength = _.size(_.min(fontFamilies, function(family) {
            return family.fonts.length;
        }).fonts);

        var truncatedFonts = _.map(fontFamilies, function(family) {
            return _.take(family.fonts, minLength);
        });

        return _.zip.apply(undefined, truncatedFonts);
    };

    return {
        families: families,
        familiesToCompare: familiesToCompare,
        add: add,
        remove: remove,
        addToComparison: addToComparison,
        removeFromComparison: removeFromComparison,
        count: count,
        findByName: findByName,
        isAddedToComparison: isAddedToComparison,
        comparisonMatrix: comparisonMatrix,
        fontsInComparisonMatrix: fontsInComparisonMatrix,
        swapFontsToCompare: swapFontsToCompare,
        generatePlaceholderName: generatePlaceholderName
    };
});
