'use strict';


module.exports = function($scope, $location) {
    $scope.isCurrent = function(location) {
        return location === $location.path();
    };
};
