'use strict';


module.exports = function($scope) {
    var selectFont = function(fontName) {
        return function(font) {
            $scope[fontName] = font;
        };
    };

    $scope.selectFont1 = selectFont('font1');
    $scope.selectFont2 = selectFont('font2');
};
