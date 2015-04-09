'use strict';


module.exports = function($scope, $timeout, LETTERS, testStrings, FontCardTypes) {
    var init = function() {
        $scope.testStrings = testStrings;
        $scope.FontCardTypes = FontCardTypes;
        $scope.letters = LETTERS;
    };

    init();
};
