'use strict';

var _ = require('lodash');


module.exports = function() {
    return {
        restrict: 'E',
        templateUrl: 'lib/directives/fontCardAdd/fontCardAdd.html',
        replace: true,
        controller: 'FontCardAddCtrl',
        link: function(scope, element, attrs, controllers) {
            var dragOverlay = element.find('.ddt-font-card-drag-overlay');
            var allElements = element.find('*');
            var activeClass = 'ddt-font-card-drag-overlay-active';

            allElements.on('dragenter', function(e) {
                dragOverlay.addClass(activeClass);
            });

            dragOverlay.on('dragleave', function () {
                dragOverlay.removeClass(activeClass);
            });

            dragOverlay.on('dragover', function(e) {
                e.preventDefault();
            });

            dragOverlay.on('drop', function (e) {
                e.stopPropagation();
                e.preventDefault();
                dragOverlay.removeClass(activeClass);
                scope.createFamilyFromFiles(e.originalEvent.dataTransfer.files);
            });
        }
    };
};
