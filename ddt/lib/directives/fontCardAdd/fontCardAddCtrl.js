'use strict';

var _ = require('lodash');


module.exports = function ($scope, $q, FontFamily, fontFamilyCollection) {
    var init = function() {
        $scope.fontFamily = {
            name: fontFamilyCollection.generatePlaceholderName()
        };
    };

    $scope.addFontFamily = function(fontFiles) {
        var family = new FontFamily($scope.fontFamily.name);
        var addPromise = $q.all(_.map(fontFiles, function(file) {
            return family.addFontFromFile(file);
        }));

        addPromise.then(function() {
            fontFamilyCollection.add(family);
            init();
        }, function() {
            // TODO: pop up an error.
        });
    };

    init();
};
