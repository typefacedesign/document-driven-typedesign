'use strict';

var angular = require('../angular');


angular.module('ddt').directive('ddtFocus', function() {
    return {
        restrict: 'A',
        scope: {
            ddtFocus: '='
        },
        link: function(scope, element, attrs, controllers) {
            scope.$watch('ddtFocus', function(newValue, oldValue) {
                if (newValue) {
                    element.focus();
                    element.select();
                } else {
                    element.blur();
                }
            });

            element.bind('blur', function(e) {
                scope.ddtFocus = false;
            });

            element.bind('keydown', function(e) {
                if (e.keyCode === 13) {
                    e.preventDefault();
                    e.stopPropagation();
                }

                if (e.keyCode === 13 || e.keyCode === 27) {
                    scope.ddtFocus = false;
                }
            });
        }
    };
});