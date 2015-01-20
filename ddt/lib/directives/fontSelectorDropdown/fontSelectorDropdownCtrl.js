'use strict';


module.exports = function($scope, fontFamilyCollection) {
    var init = function() {
        $scope.families = fontFamilyCollection.families();

        if (angular.isDefined($scope.onInit)) {
            $scope.onInit($scope.key, $scope.clearFont);
        }
    };

    $scope.selectFont = function(font) {
        // This design is not entirely ideal. The dropdown
        // keeps track of the currently selected font and
        // displays its name in the UI, but it has no way of
        // knowing whether the calling code is keeping track
        // of this state as well. It just calls $scope.callback
        // and assumes that the callback will remember to
        // store the state somewhere in the calling scope.
        $scope.selectedFont = font;
        $scope.onSelect($scope.key, font);
    };

    $scope.clearFont = function() {
        delete $scope.selectedFont;
    };

    init();
};
