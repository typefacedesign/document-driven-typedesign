'use strict';

var _ = require('lodash');


module.exports = function ($scope, $q, googleFontsList, FontFamily, FontSources, fontFamilyCollection) {
    var init = function () {
        $scope.selectedFonts = [];
        $scope.filterText = { family: '' };
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

    $scope.addToComparison = function() {
        _.each($scope.selectedFonts, function(font) {
            var family = FontFamily.make(font.family + ' ' + 'GF', FontSources.URL);

            var promises = _.map(_.values(font.files), function(url) {
                return family.addFontFromUrl(url);
            });

            $q.all(promises)
                .then(function() {
                    fontFamilyCollection.add(family);
                    $scope.close();
                    init();
                });
        });
    };

    init();
};
