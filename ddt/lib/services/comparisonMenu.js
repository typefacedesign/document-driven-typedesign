'use strict';

var angular = require('../angular');
var $ = require('jquery');


angular.module('ddt').factory('comparisonMenu', function() {
    $(document).on('click', function (e) {
        var menu = $('.ddt-comparison-menu');
        if (!menu.is(e.target) &&
            menu.has(e.target).length === 0 &&
            $('.open').has(e.target).length === 0 &&
            !$.contains(menu, e.target)) {
            menu.parent().removeClass('open');
        }
    });

    var open = function() {
        $('.ddt-comparison-menu-toggle').parent().toggleClass('open');
    };

    return {
        open: open
    };
});
