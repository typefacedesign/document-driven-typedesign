'use strict';

var angular = require('../angular');
var _ = require('lodash');


angular.module('ddt').factory('comparisonMatrix', function() {
    var _comparisonMatrix = [];

    var comparisonMatrix = function() {
        return _comparisonMatrix;
    };

    var addFamily = function(family) {

    };

    var removeFamily = function(family) {

    };

    return {
        comparisonMatrix: comparisonMatrix,
        addFamily: addFamily,
        removeFamily: removeFamily
    };
});
