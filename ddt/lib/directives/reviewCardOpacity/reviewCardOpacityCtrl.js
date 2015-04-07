'use strict';


module.exports = function($scope, testStrings, FontCardTypes, LETTERS) {
    var init = function() {
        $scope.opacity = 0.5;
        $scope.inverseOpacity = 1 - $scope.opacity;
        $scope.testStrings = testStrings;
        $scope.FontCardTypes = FontCardTypes;
        $scope.letters = LETTERS;

        $scope.$watch('opacity', function() {
            $scope.inverseOpacity = 1 - $scope.opacity;
        });

        $scope.fontRenderer1Id = 'reviewCardOpacityFontRenderer1_' + $scope.font1.name.replace(/\s/g, '_');
        $scope.fontRenderer2Id = 'reviewCardOpacityFontRenderer2_' + $scope.font1.name.replace(/\s/g, '_');
    };

    init();
};
