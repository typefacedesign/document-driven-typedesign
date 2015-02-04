'use strict';


module.exports = function($scope, fontParameters, testStrings) {
    var init = function() {
        $scope.fontParameters = fontParameters;
        $scope.testStrings = testStrings;
    };

    $scope.isType = function(type) {
        return $scope.cardType === type;
    };

    init();
};
