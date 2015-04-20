'use strict';


module.exports = function($timeout) {
    return {
        restrict: 'E',
        templateUrl: 'lib/directives/reviewCardOpacity/reviewCardOpacity.html',
        controller: 'ReviewCardOpacityCtrl',
        scope: {
            fontParameters: '=',
            cardType: '=',
            font1: '=',
            font2: '='
        },
        link: function(scope, element, attributes) {
            var adjustPosition = function(r1, r2) {
                r1.style.position = 'absolute';
                $timeout(function() {
                    var r1Dimensions = r1.getBoundingClientRect();
                    r2.style.position = 'absolute';
                    r2.style.left = String(r1Dimensions.left) + 'px';
                    r2.style.top = String(r1Dimensions.top) + 'px';
                }, 0);
            };

            var adjustCardSize = function(r1, r2) {
                var r1Dimensions = r1.getBoundingClientRect();
                var r2Dimensions = r2.getBoundingClientRect();
            };

            $timeout(function() {
                var wordRendererContainer = element.find('.ddt-review-card-opacity-word-renderer-container .ddt-font-renderer');
                var sentenceRendererContainer = element.find('.ddt-review-card-opacity-sentence-renderer-container .ddt-font-renderer');
                var paragraphRendererContainer = element.find('.ddt-review-card-opacity-paragraph-renderer-container .ddt-font-renderer');

                adjustPosition(wordRendererContainer.get(0), wordRendererContainer.get(1));
            }, 0);
        }
    };
};
