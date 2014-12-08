'use strict';


module.exports = function($scope) {
    var init = function() {
        $scope.text = $scope.text || 'Comfortably';
        $scope.wrap = $scope.wrap || false;
        $scope.style = 'font-family: "' + $scope.font.fileName + '";';
    };

    init();
};
