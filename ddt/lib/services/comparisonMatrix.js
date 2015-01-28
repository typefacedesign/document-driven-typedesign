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
        _buildComparisonMatrix();
    };

    var removeFamily = function(family) {
        _.pull(_fontFamilies, family);
    };

    var isAddedToComparison = function(family) {
        return _.find(_fontFamilies, function(f) {
            return family === f;
        });
    };

    var _buildComparisonMatrix = function() {
        // First, group fonts in each family by
    };

    return {
        comparisonMatrix: comparisonMatrix,
        addFamily: addFamily,
        removeFamily: removeFamily,
        isAddedToComparison: isAddedToComparison
    };
});
