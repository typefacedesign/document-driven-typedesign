'use strict';

var angular = require('../angular');


angular.module('ddt').factory('fontFamilyCollection', function() {
    var fontFamilies = [];

    var add = function(family) {
        fontFamilies.push(family);
    };

    return {
        add: add
    };
});
