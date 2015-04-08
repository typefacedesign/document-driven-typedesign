'use strict';


module.exports = function($scope, $timeout, testStrings, FontCardTypes) {
    var init = function() {
        $scope.testStrings = testStrings;
        $scope.FontCardTypes = FontCardTypes;

        $scope.toggle = true;
        var toggleFont = function() {
            $scope.toggle = !$scope.toggle;
            $timeout(toggleFont, 1);
        };
        $timeout(toggleFont, 1);
    };

    init();
};
