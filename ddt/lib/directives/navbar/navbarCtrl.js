'use strict';


module.exports = function($scope, $location, fontFamilyCollection) {
    var init = function() {
        $scope.families = fontFamilyCollection.familiesToCompare();
    };

    $scope.isCurrent = function(location) {
        return location === $location.path();
    };

    init();
};
