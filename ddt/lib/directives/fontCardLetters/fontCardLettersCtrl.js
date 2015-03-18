'use strict';

var _ = require('lodash');


module.exports = function($scope, fontParameters, FontCardTypes, LETTERS) {
    var LETTERS_PER_ROW = 5;

    var init = function() {
        // TODO: we'll eventually want several collections of letters for different languages.
        // TODO: flexbox this view.
        $scope.fontLetterGroups = {};
        _.each($scope.fontFamily.fonts, function(font) {
            $scope.fontLetterGroups[font.name] = [];
            for (var i = 0; i < font.glyphs.length; i += LETTERS_PER_ROW) {
                $scope.fontLetterGroups[font.name].push(font.glyphs.slice(i, i + LETTERS_PER_ROW));
            }
        });
        $scope.currentPage = 1;
        $scope.fontParameters = fontParameters.current[FontCardTypes.LETTER];

        $scope.tooltips = _.map($scope.fontFamily.fonts, function(font) {
            return font.name;
        });
    };

    init();
};
