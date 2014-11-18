'use strict';


var angular = require('../../angular');
angular.module('ddt').controller('FontCardsViewCtrl', require('./fontCardsViewCtrl.js'));
angular.module('ddt').directive('ddtFontCardsView', require('./fontCardsViewDirective.js'));
