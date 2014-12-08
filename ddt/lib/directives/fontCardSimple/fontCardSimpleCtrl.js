'use strict';


module.exports = function($scope) {
    var init = function() {
        $scope.text = $scope.text || 'Comfortably';
        $scope.html = $scope.html || false;
    };

    init();
};
