'use strict';


module.exports = function($scope, FontTest) {
    var init = function() {
        FontTest.make('fontTests/default/')
            .then(function(test) {
                $scope.test = test;
            });
    };

    init();
};
