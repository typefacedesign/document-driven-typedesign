'use strict';

var _ = require('lodash');


module.exports = function($scope, fontParameters, FontCardTypes, LETTERS) {
    var LETTERS_PER_ROW = 5;

    var init = function() {
        // TODO: we'll eventually want several collections of letters for different languages.
        // TODO: flexbox this view.
        var letters = LETTERS;
        $scope.letters = [];
        for (var i = 0; i < letters.length; i += LETTERS_PER_ROW) {
            $scope.letters.push(letters.slice(i, i + LETTERS_PER_ROW));
        }
        $scope.fontSize = $scope.fontSize || 36;
        $scope.currentPage = 1;
        $scope.fontParameters = fontParameters.current[FontCardTypes.LETTER];

        $scope.tooltips = _.map($scope.fontFamily.fonts, function(font) {
            return font.name;
        });
    };

    init();
};
