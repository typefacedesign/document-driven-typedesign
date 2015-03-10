/* globals angular */
'use strict';


module.exports = function($scope, $timeout, FontCases, testStrings, fontParameters) {
    var init = function() {
        $scope.menuVisible = false;
        $scope.FontCases = FontCases;
        $scope.testStrings = testStrings;
    };

    $scope.toggleMenu = function() {
        $scope.menuVisible = !$scope.menuVisible;
        $timeout(function() {
            $scope.adjustPosition();
        }, 0);
    };

    $scope.isCase = function(_case) {
        return $scope.parameterSet.fontCase === _case;
    };

    $scope.switchCase = function(_case) {
        $scope.parameterSet.fontCase = _case;
    };

    $scope.reset = function() {
        fontParameters.resetParameters($scope.parameterSet.parameterSetId);
    };

    $scope.isDefined = function(thing) {
        return angular.isDefined(thing);
    };

    init();
};
