'use strict';

var _ = require('lodash');


module.exports = function($scope) {
    var init = function() {
        $scope.pages = _.range($scope.totalPages);
    };

    $scope.switchPage = function(page) {
        if (page > $scope.totalPages) {
            $scope.currentPage = 1;
        } else {
            $scope.currentPage = page;
        }
    };

    init();
};
