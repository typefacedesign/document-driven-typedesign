'use strict';


module.exports = function($scope, fontParameters, testStrings) {
    var init = function() {
        $scope.fontParameters = fontParameters;
        $scope.testStrings = testStrings;
    };

    init();
};
