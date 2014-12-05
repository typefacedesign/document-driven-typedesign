'use strict';


module.exports = function($scope, $location, FontCardTypes) {
    $scope.FontCardTypes = FontCardTypes;

    $scope.switchCardType = function(type) {
        $scope.cardType = type;
        $location.search('cardType', $scope.cardType);
    };

    $scope.isType = function(type) {
        return $scope.cardType === type;
    };
};
