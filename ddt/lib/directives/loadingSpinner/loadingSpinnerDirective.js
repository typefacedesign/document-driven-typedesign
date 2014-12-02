'use strict';

var Spinner = require('../../../vendor/spin.js');


module.exports = function() {
    return {
        restrict: 'E',
        templateUrl: 'lib/directives/loadingSpinner/loadingSpinner.html',
        link: function(scope, element, attrs, controllers) {
            new Spinner().spin(element.find('.ddt-loading-spinner')[0]);
        }
    };
};