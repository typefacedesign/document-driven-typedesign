'use strict';


module.exports = function($scope, $rootScope, $timeout, FontComparisonTypes, EventTypes,
                          LocalStorageKeys) {
    var init = function() {
        $scope.FontComparisonTypes = FontComparisonTypes;
    };

    $scope.switchComparisonType = function(type) {
        $scope.comparisonType = type;
        localStorage.setItem(LocalStorageKeys.LAST_USED_COMPARISON_TYPE, $scope.comparisonType);
        $timeout(function() {
            $rootScope.$broadcast(EventTypes.COMPARISON_TYPE_CHANGED);
        });
    };

    $scope.isComparisonType = function(type) {
        return $scope.comparisonType === type;
    };

    init();
};
