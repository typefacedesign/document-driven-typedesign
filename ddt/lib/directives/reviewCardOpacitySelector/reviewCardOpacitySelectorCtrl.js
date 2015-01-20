/* globals angular */
'use strict';

var _ = require('lodash');


module.exports = function($scope) {
    var init = function() {
        $scope.registeredFontSelectors = {};
    };

    $scope.selectFont = function(fontName, font) {
        $scope[fontName] = font;
    };

    $scope.fontSelectorInitialized = function(key, clearFn) {
        $scope.registeredFontSelectors[key] = clearFn;
    };

    $scope.addToComparison = function(font1, font2) {
        if (angular.isDefined(font1) && angular.isDefined(font2)) {
            $scope.onSelect(font1, font2);

            _.each(_.values($scope.registeredFontSelectors), function(clearFn) {
                clearFn();
            });
        }
    };

    init();
};
