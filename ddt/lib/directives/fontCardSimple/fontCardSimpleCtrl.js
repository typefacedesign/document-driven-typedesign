'use strict';


module.exports = function($scope) {
    var init = function() {
        $scope.text = $scope.text || 'Comfortably';
        $scope.allowHtml = $scope.allowHtml || false;
        $scope.fontSize = $scope.fontSize || 36;
    };

    init();
};
