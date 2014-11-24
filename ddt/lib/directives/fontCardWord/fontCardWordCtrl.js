'use strict';

var _ = require('lodash');


module.exports = function($scope, filePicker) {
    $scope.addFont = function() {
        filePicker.pick()
            .then(function(files) {
                _.each(files, function(file) {
                    $scope.fontFamily.addFontFromFile(file)
                        .then(function() {
                            $scope.$digest();
                        });
                });
            });
    };
};
