'use strict';


module.exports = function($scope, comparisonMatrices, FontComparisonTypes, confirmDialog) {
    var init = function() {
        $scope.opacity = 0.5;
    };

    $scope.removeFromComparison = function() {
        confirmDialog('Confirm Delete', 'Do you want to delete this comparison?')
            .then(function () {
                comparisonMatrices.removeComparisonGroup(FontComparisonTypes.OPACITY, $scope.index);
            });
    };

    init();
};
