'use strict';


module.exports = function($scope, fontFamilyCollection) {
    var init = function() {
        $scope.families = fontFamilyCollection.families();
    };

    $scope.selectFont = function(font) {
        $scope.selectFont = font;
    };

    init();
};
