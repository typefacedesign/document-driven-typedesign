'use strict';


module.exports = function($scope, $location, $rootScope, $timeout, FontComparisonTypes, EventTypes) {
    var init = function() {
        $scope.FontComparisonTypes = FontComparisonTypes;
    };

    $scope.switchComparisonType = function(type) {
        $scope.comparisonType = type;
        $location.search('comparisonType', $scope.comparisonType);
        $timeout(function() {
            $rootScope.$broadcast(EventTypes.COMPARISON_TYPE_CHANGED);
        });
    };

    $scope.isComparisonType = function(type) {
        return $scope.comparisonType === type;
    };

    init();
};
