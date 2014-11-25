'use strict';

var _ = require('lodash');


module.exports = function($scope, filePicker) {
    $scope.addFont = function() {
        filePicker.pick()
            .then(function(files) {
                _.each(files, function(file) {
                    $scope.fontFamily.addFontFromFile(file)
                        .then(function() {
                            // Okay, so here's the rub: if I don't have a .then() calling
                            // this empty function here, the digest cycle is never run.
                            // I can't figure out why this happens. Just having this empty
                            // function here triggers the digest cycle. This is why people
                            // rag on you all the time, Angular.
                        });
                });
            });
    };
};
