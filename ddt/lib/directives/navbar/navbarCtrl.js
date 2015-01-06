'use strict';


module.exports = function($scope, $location, $timeout, fontFamilyCollection, comparisonMenu) {
    var init = function() {
        $scope.families = fontFamilyCollection.familiesToCompare();
    };

    $scope.isCurrent = function(location) {
        return location === $location.path();
    };

    $scope.openMenu = function() {
        comparisonMenu.open();
    };

    $scope.removeFromComparison = function(family) {
        $timeout(function() {
            fontFamilyCollection.removeFromComparison(family);
        }, 0);
    };

    init();
};
