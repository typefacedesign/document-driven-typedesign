'use strict';


module.exports = function($scope) {
    var init = function() {
        $scope.text = $scope.text || 'Comfortably';
        $scope.wrap = $scope.wrap || false;
        $scope.html = $scope.html || false;
        $scope.style = 'font-family: "' + $scope.font.fileName + '";';
    };

    init();
};
