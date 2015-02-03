'use strict';

var angular = require('../angular');


angular.module('ddt').directive('contenteditable', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ngModel) {
            var read = function() {
                ngModel.$setViewValue(element.html());
            };

            ngModel.$render = function () {
                element.html(ngModel.$viewValue || '');
            };

            element.bind('blur keyup change', function () {
                scope.$apply(read);
            });
        }
    };
});
