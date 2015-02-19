/* globals angular */
'use strict';


module.exports = function($scope, comparisonMatrix) {
    var init = function() {
        $scope.menuVisible = false;
        $scope.comparisonMatrix = comparisonMatrix;
    };

    $scope.toggleMenu = function() {
        $scope.menuVisible = !$scope.menuVisible;
    };

    $scope.removeFamily = function(family) {
        comparisonMatrix.removeFamily(family);
    };

    init();
};
