'use strict';


var angular = require('../../angular');
angular.module('ddt').controller('FilePickerButtonCtrl', require('./filePickerButtonCtrl'));
angular.module('ddt').directive('ddtFilePickerButton', require('./filePickerButtonDirective'));
