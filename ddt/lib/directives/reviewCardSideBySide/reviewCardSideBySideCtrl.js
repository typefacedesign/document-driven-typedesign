'use strict';


module.exports = function($scope, fontFamilyCollection) {
    var init = function() {
        // TODO: make this a constant.
        $scope.letters = 'abcdefghjklmnopqrstuvwxyz'.split('');
    };

    $scope.swapFontsToCompare = function(font1, font2) {
        fontFamilyCollection.swapFontsToCompare(font1, font2);
    };

    init();
};
