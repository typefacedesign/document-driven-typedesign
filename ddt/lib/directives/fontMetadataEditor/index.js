'use strict';

var angular = require('../../angular');


angular.module('ddt').controller('FontMetadataEditorCtrl', require('./fontMetadataEditorCtrl'));
angular.module('ddt').factory('fontMetadataEditor', require('./fontMetadataEditorService'));
angular.module('ddt').directive('ddtFontMetadataEditor', require('./fontMetadataEditorDirective'));
