/* globals angular */
'use strict';


module.exports = function($scope, fontFamilyCollection, FontCardTypes, testStrings, LETTERS,
                          comparisonMatrices, FontComparisonTypes, confirmDialog) {
    var init = function() {
        $scope.letters = LETTERS;
        $scope.FontCardTypes = FontCardTypes;
        $scope.testString = testStrings[$scope.cardType].text;

        $scope.$watch('cardType', function() {
            if (angular.isDefined(testStrings[$scope.cardType])) {
                $scope.testString = testStrings[$scope.cardType].text;
            }
        });
    };

    $scope.removeFromComparison = function() {
        confirmDialog('Confirm Delete', 'Do you want to delete this comparison?')
            .then(function() {
                comparisonMatrices.removeComparisonGroup(
                    FontComparisonTypes.SIDE_BY_SIDE,
                    $scope.index
                );
            });
    };

    init();
};
