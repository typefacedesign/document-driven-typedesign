'use strict';


module.exports = function($timeout, FontCardTypes) {
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
            var originalCardContentDimensions;
            var adjustPositions = function(selector, centerRenderer, adjustRendererWidth) {
                var renderers = element.find(selector + ' ddt-font-renderer');
                var renderer1 = renderers.get(0);
                var renderer2 = renderers.get(1);

                var cardContent = element.find('.ddt-review-card-content').get(0);
                var cardContentDimensions = cardContent.getBoundingClientRect();
                var cardContentPadding = parseInt(getComputedStyle(cardContent).padding.replace('px', ''), 10);

                // Reset card dimensions before doing anything else.
                if (!originalCardContentDimensions) {
                    originalCardContentDimensions = cardContentDimensions;
                } else {
                    cardContent.style.width = String(originalCardContentDimensions.width) + 'px';
                    cardContent.style.height = String(originalCardContentDimensions.height) + 'px';
                }

                // Adjust renderer width. We need to do this for paragraph cards.
                if (adjustRendererWidth) {
                    renderer1.style.width = renderer2.style.width =
                        String(cardContentDimensions.width - 2 * cardContentPadding) + 'px';
                }

                // Figure out max width and max height.
                var renderer1Dimensions = renderer1.getBoundingClientRect();
                var renderer2Dimensions = renderer2.getBoundingClientRect();

                var maxWidth, widerRenderer, maxHeight;
                if (renderer1Dimensions.width > renderer2Dimensions.width) {
                    maxWidth = renderer1Dimensions.width;
                    widerRenderer = renderer1;
                } else {
                    maxWidth = renderer2Dimensions.width;
                    widerRenderer = renderer2;
                }

                if (renderer1Dimensions.height > renderer2Dimensions.height) {
                    maxHeight = renderer1Dimensions.height;
                } else {
                    maxHeight = renderer2Dimensions.height;
                }

                // Increase card height by that amount. But first, get the newest card
                // content dimensions. They may have been reset by now.
                cardContentDimensions = cardContent.getBoundingClientRect();
                cardContent.style.height = String(cardContentDimensions.height + maxHeight) + 'px';

                if (centerRenderer) {
                    // If card's (width - padding) < max width, increase width of card.
                    // Otherwise, center the words in the card.
                    if (cardContentDimensions.width - 2 * cardContentPadding < maxWidth) {
                        // Here we assume left, right, top, bottom padding is the same.
                        // getComputedStyle will always give us padding in pixels.
                        cardContent.style.width = String(maxWidth + 2 * cardContentPadding) + 'px';
                    } else {
                        // Calculate left position for wider word.
                        var left = cardContentDimensions.left +
                            cardContentDimensions.width / 2 - widerRenderer.getBoundingClientRect().width / 2;

                        // This becomes the left position for both renderers.
                        renderer1.style.left = renderer2.style.left = String(left) + 'px';
                    }
                }
            };

            var adjustAll = function() {
                if (scope.cardType === FontCardTypes.WORD) {
                    adjustPositions('.ddt-review-card-opacity-word-renderer-container', true);
                } else if (scope.cardType === FontCardTypes.SENTENCE) {
                    adjustPositions('.ddt-review-card-opacity-sentence-renderer-container');
                } else if (scope.cardType === FontCardTypes.PARAGRAPH) {
                    adjustPositions('.ddt-review-card-opacity-paragraph-renderer-container', false, true);
                } else if (scope.cardType === FontCardTypes.LETTER) {
                    // Set card's height and width to auto.
                    var cardContent = element.find('.ddt-review-card-content').get(0);
                    cardContent.style.width = 'auto';
                    cardContent.style.height = 'auto';
                }
            };

            $timeout(adjustAll, 0);
            scope.$watch('fontParameters', function() {
                $timeout(adjustAll, 0);
            }, true);

            scope.$watch('cardType', function() {
                $timeout(adjustAll, 0);
            });
        }
    };
};
