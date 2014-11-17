'use strict';


module.exports = function($scope, $routeParams, FontCardTypes) {
    $scope.cardType = $routeParams.cardType || FontCardTypes.WORD;
};
