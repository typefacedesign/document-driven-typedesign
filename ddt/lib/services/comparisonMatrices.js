'use strict';

var angular = require('../angular');
var _ = require('lodash');


angular.module('ddt').factory('comparisonMatrices', function(FontComparisonTypes) {
    var _comparisonMatrices = {};

    _.each(_.values(FontComparisonTypes), function(key) {
        _comparisonMatrices[key] = [];
    });

    var comparisonMatrices = function() {
        return _comparisonMatrices;
    };

    var removeComparisonGroup = function(type, index) {
        _comparisonMatrices[type].splice(index, 1);
    };

    var addComparisonGroup = function(type, comparisonGroup) {
        if (comparisonGroup.length > 0 && _.all(comparisonGroup, angular.isDefined)) {
            _comparisonMatrices[type].push(comparisonGroup);
        }
    };

    return {
        comparisonMatrices: comparisonMatrices,
        addComparisonGroup: addComparisonGroup,
        removeComparisonGroup: removeComparisonGroup
    };
});
