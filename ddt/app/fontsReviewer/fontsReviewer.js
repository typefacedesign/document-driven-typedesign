'use strict';


module.exports = function($scope, fontFamilyCollection, fontParameters, FontCardTypes, $timeout) {
    var init = function() {
        $scope.comparisonMatrix = fontFamilyCollection.comparisonMatrix();
        $scope.fontParameters = fontParameters.current[FontCardTypes.LETTER];
        $scope.letters = 'abcdefghjklmnopqrstuvwxyz'.split('');

        $scope.$watch(function() {
            return fontFamilyCollection.comparisonMatrix();
        }, function() {
            $scope.comparisonMatrix = fontFamilyCollection.comparisonMatrix();
        });
    };

    init();
};
