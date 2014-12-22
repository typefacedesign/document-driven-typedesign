'use strict';


module.exports = function($scope) {
    var init = function() {
        $scope.wrap = $scope.wrap || false;
        $scope.allowHtml = $scope.allowHtml || false;
        $scope.style = calculateInlineStyle();

        $scope.$watch('fontParameters', function() {
            $scope.style = calculateInlineStyle();
        }, true);
    };

    var calculateInlineStyle = function() {
        return '' +
            'font-family: "' + $scope.font.name +
            '"; font-size: ' + $scope.fontParameters.fontSize.toString() + 'px;';
    };

    init();
};
