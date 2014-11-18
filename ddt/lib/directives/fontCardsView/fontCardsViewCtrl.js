'use strict';


module.exports = function ($scope, FontCardTypes, fontFamilies) {
    $scope.FontCardTypes = FontCardTypes;
    $scope.fontFamilyCount = fontFamilies.count();

    $scope.isType = function(typeToCheck) {
        return $scope.fontCardType === typeToCheck;
    };
};
