'use strict';

var angular = require('../../angular');


angular.module('ddt').controller('GoogleFontsChooserCtrl', require('./googleFontsChooserCtrl.js'));
angular.module('ddt').service('googleFontsChooser', require('./googleFontsChooserService.js'));
angular.module('ddt').directive('ddtGoogleFontsChooser', require('./googleFontsChooserDirective.js'));
