/* globals angular */
'use strict';


module.exports = function($scope, $timeout, FontCases, TextAlignment, testStrings, fontParameters) {
    var init = function() {
        $scope.menuVisible = false;
        $scope.FontCases = FontCases;
        $scope.TextAlignment = TextAlignment;
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

    $scope.isAlignment = function(alignment) {
        return $scope.parameterSet.textAlignment === alignment;
    };

    $scope.switchAlignment = function(alignment) {
        $scope.parameterSet.textAlignment = alignment;
    };

    $scope.reset = function() {
        fontParameters.resetParameters($scope.parameterSet.parameterSetId);
    };

    $scope.isDefined = function(thing) {
        return angular.isDefined(thing);
    };

    init();
};
