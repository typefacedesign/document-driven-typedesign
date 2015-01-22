/* globals angular */
'use strict';

var _ = require('lodash');


module.exports = function($scope) {
    var init = function() {
        $scope.selectedFonts = {};
        $scope.registeredFontSelectors = {};
        $scope.selectorCount = new Array(2);
    };

    $scope.selectFont = function(key, font) {
        $scope.selectedFonts[key] = font;
    };

    $scope.fontSelectorInitialized = function(key, clearFn) {
        $scope.registeredFontSelectors[key] = clearFn;
    };

    $scope.addToComparison = function() {
        $scope.onSelect(_.values($scope.selectedFonts));

        _.each(_.values($scope.registeredFontSelectors), function(clearFn) {
            clearFn();
        });
    };

    $scope.addAnother = function() {
        if (angular.isDefined($scope.allowMore) && $scope.allowMore) {
            $scope.selectorCount = new Array($scope.selectorCount.length + 1);
        }
    };

    $scope.makeKey = function(index) {
        return 'font' + index.toString();
    };

    init();
};
