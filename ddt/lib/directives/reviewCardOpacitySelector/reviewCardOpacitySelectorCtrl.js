/* globals angular */
'use strict';

var _ = require('lodash');


module.exports = function($scope) {
    var init = function() {
        $scope.selectedFonts = {};
        $scope.fontSelectorDropdowns = {};

        // We need two dropdowns by default.
        for (var i = 0; i < 2; i++) {
            $scope.addAnother();
        }
    };

    $scope.selectFont = function(key, font) {
        $scope.selectedFonts[key] = font;
    };

    $scope.fontSelectorInitialized = function(key, clearFn) {
        $scope.fontSelectorDropdowns[key] = clearFn;
    };

    $scope.addToComparison = function() {
        $scope.onSelect(_.values($scope.selectedFonts));

        _.each(_.values($scope.fontSelectorDropdowns), function(clearFn) {
            clearFn();
        });
    };

    $scope.addAnother = function() {
        if (angular.isDefined($scope.allowMore) && $scope.allowMore) {
            $scope.fontSelectorDropdowns[$scope.makeKey()] = true;
        }
    };

    $scope.removeFontSelector = function(index, key) {
        delete $scope.fontSelectorDropdowns[key];
        delete $scope.selectedFonts[key];
    };

    $scope.makeKey = function() {
        var key;
        do {
            key = 'font' + _.random(9999);
        } while(angular.isDefined($scope.fontSelectorDropdowns[key]));

        return key;
    };

    $scope.totalSelectors = function() {
        return _.size($scope.fontSelectorDropdowns);
    };

    init();
};
