'use strict';

var angular = require('../../angular');


angular.module('ddt').controller('DottedPaginatorCtrl', require('./dottedPaginatorCtrl'));
angular.module('ddt').directive('ddtDottedPaginator', require('./dottedPaginatorDirective'));
