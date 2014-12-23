'use strict';

var angular = require('../../angular');


angular.module('ddt').controller('ColorPickerCtrl', require('./colorPickerCtrl'));
angular.module('ddt').directive('ddtColorPicker', require('./colorPickerDirective'));
