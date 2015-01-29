'use strict';

var angular = require('../angular');
var _ = require('lodash');


angular.module('ddt').factory('comparisonMatrix', function() {
    var _fontFamilies = [];
    var _comparisonMatrix = [];

    var comparisonMatrix = function() {
        return _comparisonMatrix;
    };

    var addFamily = function(family) {
        _fontFamilies.push(family);
        _comparisonMatrix = _buildComparisonMatrix();
    };

    var removeFamily = function(family) {
        _.pull(_fontFamilies, family);
        _comparisonMatrix = _buildComparisonMatrix();
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

    return {
        comparisonMatrix: comparisonMatrix,
        addFamily: addFamily,
        removeFamily: removeFamily,
        isAddedToComparison: isAddedToComparison
    };
});
