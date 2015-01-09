'use strict';


module.exports = function($scope, fontFamilyCollection, fontParameters, FontCardTypes, $timeout) {
    var init = function() {
        $scope.comparisonMatrix = fontFamilyCollection.comparisonMatrix();
        $scope.fontsInComparisonMatrix = fontFamilyCollection.fontsInComparisonMatrix();
        $scope.fontParameters = fontParameters.current[FontCardTypes.LETTER];

        // TODO: make this a constant.
        $scope.letters = 'abcdefghjklmnopqrstuvwxyz'.split('');

        $scope.$watch(function() {
            return fontFamilyCollection.comparisonMatrix();
        }, function() {
            $scope.comparisonMatrix = fontFamilyCollection.comparisonMatrix();
        });
    };

    $scope.swapFontsToCompare = function(font1, font2) {
        fontFamilyCollection.swapFontsToCompare(font1, font2);
    };

    init();
};
