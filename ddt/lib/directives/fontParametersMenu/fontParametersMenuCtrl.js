'use strict';


module.exports = function($scope, FontCases, testStrings, $rootScope) {
    var init = function() {
        $scope.menuVisible = false;
        $scope.FontCases = FontCases;
        $scope.testStrings = testStrings;
    };

    $scope.toggleMenu = function() {
        $scope.menuVisible = !$scope.menuVisible;
    };

    $scope.isCase = function(_case) {
        return $scope.parameterSet.fontCase === _case;
    };

    $scope.switchCase = function(_case) {
        $scope.parameterSet.fontCase = _case;
    };

    init();
};
