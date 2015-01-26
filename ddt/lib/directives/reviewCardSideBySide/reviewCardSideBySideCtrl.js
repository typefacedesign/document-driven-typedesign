/* globals angular */
'use strict';


module.exports = function($scope, fontFamilyCollection, FontCardTypes, testStrings, LETTERS) {
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

    init();
};
