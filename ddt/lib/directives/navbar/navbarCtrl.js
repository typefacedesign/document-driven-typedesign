'use strict';


module.exports = function($scope, $location, comparisonMatrix) {
    $scope.isCurrent = function(location) {
        return location === $location.path();
    };

    $scope.fontFamilyCount = function() {
        return comparisonMatrix.familyCount();
    };
};
