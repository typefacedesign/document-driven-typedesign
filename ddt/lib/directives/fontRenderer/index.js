'use strict';


var angular = require('../../angular');
angular.module('ddt').controller('FontRendererCtrl', require('./fontRendererCtrl'));
angular.module('ddt').directive('ddtFontRenderer', require('./fontRendererDirective'));
