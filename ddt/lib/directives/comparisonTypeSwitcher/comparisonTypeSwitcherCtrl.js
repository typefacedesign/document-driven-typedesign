'use strict';


module.exports = function($scope, $location, FontComparisonTypes) {
    var init = function() {
        $scope.FontComparisonTypes = FontComparisonTypes;
    };

    $scope.switchComparisonType = function(type) {
        $scope.comparisonType = type;
        $location.search('comparisonType', $scope.comparisonType);
    };

    $scope.isComparisonType = function(type) {
        return $scope.comparisonType === type;
    };

    init();
};
