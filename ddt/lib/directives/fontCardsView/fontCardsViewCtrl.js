'use strict';

var _ = require('lodash');


module.exports = function ($scope, FontCardTypes, fontFamilyCollection) {
    $scope.FontCardTypes = FontCardTypes;
    $scope.families = fontFamilyCollection.families();

    $scope.isType = function(typeToCheck) {
        return $scope.fontCardType === typeToCheck;
    };
};
