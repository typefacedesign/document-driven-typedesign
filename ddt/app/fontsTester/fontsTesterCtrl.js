/* globals angular */
'use strict';


module.exports = function($scope, $routeParams, FontTest) {
    var init = function() {
        if (angular.isDefined($routeParams.directory)) {
            FontTest.make($routeParams.directory)
                .then(function(test) {
                    $scope.test = test;
                });
        }
    };

    init();
};
