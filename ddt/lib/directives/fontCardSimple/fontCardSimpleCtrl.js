'use strict';


module.exports = function($scope) {
    var init = function() {
        $scope.allowHtml = $scope.allowHtml || false;
    };

    init();
};
