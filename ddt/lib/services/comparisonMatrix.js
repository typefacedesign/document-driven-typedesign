'use strict';

var angular = require('../angular');
var _ = require('lodash');


angular.module('ddt').factory('comparisonMatrix', function(LETTERS, COLORS) {
    var _fontFamilies = [];
    var _comparisonMatrix = [];
    var _familyLabels = [];

    var comparisonMatrix = function() {
        return _comparisonMatrix;
    };

    var fontFamilies = function() {
        return _fontFamilies;
    };

    var familyLabels = function() {
        return _familyLabels;
    };

    var _generateFamilyLabels = function() {
        if (_fontFamilies.length === 0) {
            return;
        }

        var familyColors = _.filter(_.zip(COLORS, _fontFamilies), function(v) { return _.every(v); });
        var familyDetails = [];
        _.each(familyColors, function(pair) {
            familyDetails.push({
                color: pair[0],
                family: pair[1]
            });
        });

        return _.pick(
            _.zipObject(LETTERS, familyDetails),
            function(value) { return angular.isDefined(value); }
        );
    };

    var addFamily = function(family, noPersist) {
        if (!noPersist) {
            var familiesToComparePref = JSON.parse(localStorage.getItem('ddt:familiesToCompare'));
            if (angular.isUndefined(familiesToComparePref) || !familiesToComparePref) {
                familiesToComparePref = [];
            }

            familiesToComparePref.push(family.name);
            localStorage.setItem('ddt:familiesToCompare', JSON.stringify(familiesToComparePref));
        }

        _fontFamilies.push(family);
        _comparisonMatrix = _buildComparisonMatrix();
        _familyLabels = _generateFamilyLabels();
    };

    var removeFamily = function(family) {
        var familiesToComparePref = JSON.parse(localStorage.getItem('ddt:familiesToCompare'));
        if (angular.isDefined(familiesToComparePref)) {
            _.pull(familiesToComparePref, family.name);
            localStorage.setItem('ddt:familiesToCompare', JSON.stringify(familiesToComparePref));
        }
        _.pull(_fontFamilies, family);
        _comparisonMatrix = _buildComparisonMatrix();
        _familyLabels = _generateFamilyLabels();
    };

    var isAddedToComparison = function(family) {
        return _.find(_fontFamilies, function(f) {
            return family === f;
        });
    };

    var _buildComparisonMatrix = function() {
        if (_fontFamilies.length < 2) {
            return [];
        }

        var groupedFontsCollection = [];
        _.each(_fontFamilies, function(family) {
            // Group fonts by weight.
            var groupedFonts = _.groupBy(family.fonts, function(font) {
                return font.weight;
            });

            // Then, group fonts in each group by whether they're roman or italic.
            _.each(_.keys(groupedFonts), function(key) {
                groupedFonts[key] = _.groupBy(groupedFonts[key], function(font) {
                    return font.isItalic? 'italic' : 'roman';
                });
            });

            var groupedFontsMap = new Map();
            _.each(_.keys(groupedFonts), function(weight) {
                _.each(_.keys(groupedFonts[weight]), function(isItalic) {
                    if (groupedFonts[weight][isItalic].length == 1) {
                        groupedFontsMap.set(
                            weight.toString() + isItalic,
                            groupedFonts[weight][isItalic][0]
                        );
                    }
                });
            });

            groupedFontsCollection.push(groupedFontsMap);
        });

        var comparisonMatrix = [];
        groupedFontsCollection[0].forEach(function(font, property, map) {
            var propertyExists = _.map(groupedFontsCollection, function(map) {
                return map.has(property);
            });

            if (_.all(propertyExists)) {
                var comparisonGroup = [];
                _.each(groupedFontsCollection, function(map) {
                    comparisonGroup.push(map.get(property));
                });
                comparisonMatrix.push(comparisonGroup);
            }
        });

        return _sortComparisonMatrix(comparisonMatrix);
    };

    var _sortComparisonMatrix = function(matrix) {
        // TODO: this is the exact same algorithm as the one in the FontFamily
        // service, except this one operates on a slightly different data structure.
        // Unify the two.

        // First, we group fonts by whether they are roman or italic.
        var groupedFonts = _.groupBy(matrix, function(pair) {
            return pair[0].isItalic? 'italic' : 'roman';
        });

        // Then sort each group by weight.
        _.each(_.keys(groupedFonts), function(key) {
            groupedFonts[key] = _.sortBy(groupedFonts[key], function(pair) {
                return pair[0].weight;
            });
        });

        // Finally, splice it back together.
        var fonts = [];
        _.each(_.values(groupedFonts), function(values) {
            fonts.push(values);
        });

        return _.flatten(fonts, true);
    };

    var familyCount = function() {
        return _fontFamilies.length;
    };

    return {
        comparisonMatrix: comparisonMatrix,
        fontFamilies: fontFamilies,
        familyLabels: familyLabels,
        addFamily: addFamily,
        removeFamily: removeFamily,
        isAddedToComparison: isAddedToComparison,
        familyCount: familyCount
    };
});
