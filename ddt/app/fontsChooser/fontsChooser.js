'use strict';


module.exports = function($scope, $routeParams, $location, FontCardTypes) {
    $scope.cardType = $routeParams.cardType || FontCardTypes.WORD;
};
