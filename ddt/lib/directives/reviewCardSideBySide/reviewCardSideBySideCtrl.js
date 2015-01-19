/* globals angular */
'use strict';


module.exports = function($scope, fontFamilyCollection, FontCardTypes, testStrings) {
    var init = function() {
        // TODO: make this a constant.
        $scope.letters = 'abcdefghjklmnopqrstuvwxyz'.split('');
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
