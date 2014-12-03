'use strict';


module.exports = function($scope, FontSources) {
    var init = function() {
        $scope.text = $scope.text || 'Comfortably';
        $scope.style = 'font-family: "' + $scope.font.fileName + '";';
    };

    init();
};
