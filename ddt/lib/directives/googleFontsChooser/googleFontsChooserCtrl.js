'use strict';

var _ = require('lodash');


module.exports = function ($scope, googleFontsList) {
    var init = function () {
        $scope.selectedFonts = [];
        googleFontsList.getFontsList()
            .then(function(fontsList) {
                $scope.fonts = fontsList;
            });
    };

    $scope.selectFont = function(font) {
        $scope.selectedFonts.push(font);
    };

    $scope.deselectFont = function(font) {
        _.pull($scope.selectedFonts, font);
    };

    $scope.isFontSelected = function(font) {
        return _.find($scope.selectedFonts, function(f) {
            return f === font;
        });
    };

    init();
};
