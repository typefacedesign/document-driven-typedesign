'use strict';


module.exports = function($scope, fontParameters) {
    var init = function() {
        $scope.menuVisible = false;
        $scope.fontParameters = fontParameters;
    };

    $scope.toggleMenu = function() {
        $scope.menuVisible = !$scope.menuVisible;
    };

    init();
};
