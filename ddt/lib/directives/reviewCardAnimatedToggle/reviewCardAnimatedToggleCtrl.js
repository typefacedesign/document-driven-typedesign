'use strict';


module.exports = function($scope, $timeout, testStrings, FontCardTypes) {
    var init = function() {
        $scope.testStrings = testStrings;
        $scope.FontCardTypes = FontCardTypes;
    };

    init();
};
