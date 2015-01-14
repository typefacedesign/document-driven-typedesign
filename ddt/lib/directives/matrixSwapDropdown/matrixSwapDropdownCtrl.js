'use strict';


module.exports = function($scope, fontFamilyCollection) {
    $scope.swapFontsToCompare = function(font1, font2) {
        fontFamilyCollection.swapFontsToCompare(font1, font2);
    };
};
