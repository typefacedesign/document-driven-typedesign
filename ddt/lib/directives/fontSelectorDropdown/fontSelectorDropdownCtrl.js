'use strict';


module.exports = function($scope, fontFamilyCollection) {
    var init = function() {
        $scope.families = fontFamilyCollection.families();
    };

    $scope.selectFont = function(fontName, font) {
        // This design is not entirely ideal. The dropdown
        // keeps track of the currently selected font and
        // displays its name in the UI, but it has no way of
        // knowing whether the calling code is keeping track
        // of this state as well. It just calls $scope.callback
        // and assumes that the callback will remember to
        // store the state somewhere in the calling scope.
        $scope.selectedFont = font;
        $scope.callback(fontName, font);
    };

    init();
};
