'use strict';

var _ = require('lodash');


module.exports = function($scope, $q, FontTest) {
    var init = function() {
        FontTest.getIndex()
            .then(function(index) {
                _getFontTests(index)
                    .then(function(fontTests) {
                        $scope.fontTests = fontTests;
                    });
            });
    };

    var _getFontTests = function(index) {
        var fontTestPromises = _.map(_.values(index), function(directory) {
            return FontTest.make(directory);
        });

        return $q.all(fontTestPromises);
    };

    init();
};
