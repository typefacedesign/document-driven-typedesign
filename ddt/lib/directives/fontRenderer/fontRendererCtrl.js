/* globals angular */
'use strict';


module.exports = function($scope, FontCases) {
    var init = function() {
        $scope.wrap = $scope.wrap || false;
        $scope.allowHtml = $scope.allowHtml || false;
        $scope.style = calculateInlineStyle();

        $scope.$watch('fontParameters', updateInlineStyle, true);
        $scope.$watch('opacity', updateInlineStyle);
    };

    var updateInlineStyle = function() {
        $scope.style = calculateInlineStyle();
    };

    var calculateInlineStyle = function() {
        var style = '' +
            'font-family: "' + $scope.font.name + '";' +
            'font-size: ' + $scope.fontParameters.fontSize.toString() + 'px;' +
            'color: ' + $scope.fontParameters.color + ';';

        if (angular.isDefined($scope.fontParameters.lineHeight)) {
            style += 'line-height: ' + $scope.fontParameters.lineHeight.toString() + ';';
        }

        if (angular.isDefined($scope.fontParameters.letterSpacing)) {
            if ($scope.fontParameters.letterSpacing !== 'normal') {
                style += 'letter-spacing: ' + $scope.fontParameters.letterSpacing.toString() + 'px;';
            }
        }

        if (angular.isDefined($scope.fontParameters.wordSpacing)) {
            if ($scope.fontParameters.wordSpacing !== 'normal') {
                style += 'word-spacing: ' + $scope.fontParameters.wordSpacing.toString() + 'px;';
            }
        }

        if ($scope.fontParameters.fontCase !== FontCases.UNSPECIFIED) {
            style += 'text-transform: ' + $scope.fontParameters.fontCase + ';';
        }

        if (angular.isDefined($scope.opacity)) {
            style += 'opacity: ' + $scope.opacity + ';';
        }

        return style;
    };

    init();
};
