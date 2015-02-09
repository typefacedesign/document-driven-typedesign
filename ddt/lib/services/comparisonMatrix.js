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

    var addFamily = function(family) {
        _fontFamilies.push(family);
        _comparisonMatrix = _buildComparisonMatrix();
        _familyLabels = _generateFamilyLabels();
    };

    var removeFamily = function(family) {
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

            // Then, group fonts in each group by sub-family name.
            _.each(_.keys(groupedFonts), function(key) {
                groupedFonts[key] = _.groupBy(groupedFonts[key], function(font) {
                    return font.subFamilyName;
                });
            });

            var groupedFontsMap = new Map();
            _.each(_.keys(groupedFonts), function(weight) {
                _.each(_.keys(groupedFonts[weight]), function(subFamilyName) {
                    if (groupedFonts[weight][subFamilyName].length == 1) {
                        groupedFontsMap.set(
                            weight.toString() + subFamilyName,
                            groupedFonts[weight][subFamilyName][0]
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

        return comparisonMatrix;
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
