'use strict';


module.exports = function($scope, $routeParams, $location, FontCardTypes) {
    $scope.FontCardTypes = FontCardTypes;
    $scope.cardType = $routeParams.cardType || FontCardTypes.WORD;

    $scope.switchCardType = function(type) {
        $scope.cardType = type;
        $location.search('cardType', $scope.cardType);
    };
};
