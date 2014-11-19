'use strict';


module.exports = function ($scope, FontCardTypes, fontFamilyCollection) {
    $scope.FontCardTypes = FontCardTypes;
    $scope.fontFamilyCount = fontFamilyCollection.count();

    $scope.isType = function(typeToCheck) {
        return $scope.fontCardType === typeToCheck;
    };
};
