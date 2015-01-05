'use strict';

var angular = require('../../angular');


angular.module('ddt').controller('NavbarCtrl', require('./navbarCtrl'));
angular.module('ddt').directive('ddtNavbar', require('./navbarDirective'));
