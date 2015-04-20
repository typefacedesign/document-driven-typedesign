/* globals angular */
'use strict';


module.exports = function($scope, $rootScope, FontCases, EventTypes) {
    var init = function() {
        $scope.wrap = $scope.wrap || false;
        $scope.allowHtml = $scope.allowHtml || false;
        $scope.style = calculateInlineStyle();

        $scope.$watch('fontParameters', updateInlineStyle, true);
        $scope.$watch('opacity', updateInlineStyle);
        $rootScope.$on(EventTypes.COMPARISON_TYPE_CHANGED, updateInlineStyle);
    };

    var updateInlineStyle = function() {
        $scope.style = calculateInlineStyle();
    };

    var calculateInlineStyle = function() {
        var style = '' +
            'font-family: "' + $scope.font.faceName + '";' +
            'font-size: ' + $scope.fontParameters.fontSize.toString() + 'px;' +
            'color: ' + $scope.fontParameters.color + ';' +
            'background-color: ' + $scope.fontParameters.backgroundColor + ';';

        if (angular.isDefined($scope.fontParameters.lineHeight)) {
            style += 'line-height: ' + $scope.fontParameters.lineHeight.toString() + ';';
        }

        if (angular.isDefined($scope.fontParameters.textAlignment)) {
            style += 'text-align: ' + $scope.fontParameters.textAlignment + ';';
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

        // $scope.adjustWidth won't be defined when the controller is
        // first instantiated because the linking function hasn't had a chance
        // to run.
        if (angular.isDefined($scope.followWidth) && angular.isDefined($scope.adjustWidth)) {
            $scope.adjustWidth();
        }

        return style;
    };

    init();
};
