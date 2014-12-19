'use strict';


module.exports = function($scope) {
    var init = function() {
        $scope.menuVisible = false;
    };

    $scope.toggleMenu = function() {
        $scope.menuVisible = !$scope.menuVisible;
    };

    init();
};
