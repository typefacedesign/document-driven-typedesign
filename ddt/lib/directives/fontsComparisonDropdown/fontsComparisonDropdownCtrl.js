/* globals angular */
'use strict';


module.exports = function($scope, $timeout, comparisonMatrix) {
    var init = function() {
        $scope.menuVisible = false;
        $scope.comparisonMatrix = comparisonMatrix;
    };

    $scope.toggleMenu = function() {
        $scope.menuVisible = !$scope.menuVisible;
        $timeout(function() {
            $scope.adjustPosition();
        }, 0);
    };

    $scope.removeFamily = function(family) {
        comparisonMatrix.removeFamily(family);
    };

    init();
};
