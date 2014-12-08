'use strict';


module.exports = function($scope) {
    var init = function() {
        $scope.text = $scope.text || 'Comfortably';
        $scope.wrap = $scope.wrap || false;
        $scope.allowHtml = $scope.allowHtml || false;
        $scope.fontSize = $scope.fontSize || 36;
        $scope.style = 'font-family: "' + $scope.font.fileName + '"; font-size: ' + $scope.fontSize.toString() + 'px;';
    };

    init();
};
