'use strict';


module.exports = function($scope, testStrings, FontCardTypes, LETTERS) {
    var init = function() {
        $scope.opacity = 0.5;
        $scope.testStrings = testStrings;
        $scope.FontCardTypes = FontCardTypes;
        $scope.letters = LETTERS;
    };

    init();
};
