/* globals angular */
'use strict';

var _ = require('lodash');


module.exports = function ($scope, $q, $http, FontFamily, FontSources, fontFamilyCollection, Font) {
    var PLACEHOLDER_URL = {name: 'url1'};

    $scope.VIEW_MAIN = 'main';
    $scope.VIEW_URL = 'url';
    $scope.VIEW_LOADING = 'loading';

    var init = function() {
        $scope.fontFamily = {
            name: fontFamilyCollection.generatePlaceholderName()
        };
        $scope.urlFields = [angular.copy(PLACEHOLDER_URL)];
        $scope.currentView = $scope.VIEW_MAIN;
    };

    $scope.addFontFamily = function(fontFiles) {
        if (_.size(fontFiles) === 0) {
            return;
        }

        var makeFontPromise = $q.all(_.map(fontFiles, function(file) {
            return Font.make({source: FontSources.FILE, file: file});
        }));

        makeFontPromise.then(function(fonts) {
            var fontGroups = _.groupBy(fonts, function(font) {
                return font.familyName;
            });

            _.each(_.keys(fontGroups), function(familyName) {
                var family = fontFamilyCollection.findByName(familyName);
                var newFamily = false;
                if (!angular.isDefined(family)) {
                    family = new FontFamily(familyName);
                    newFamily = true;
                }

                family.addFonts(fontGroups[familyName]);

                if (newFamily) {
                    fontFamilyCollection.add(family);
                }
            });
        });
    };

    $scope.addUrlField = function() {
        $scope.urlFields.push({name: 'url' + ($scope.urlFields.length + 1).toString()});
    };

    $scope.createFamilyFromUrls = function() {
        if (!$scope.urlUploadForm.$valid) {
            // TODO: display an error dialog.
            return;
        }

        $scope.currentView = $scope.VIEW_LOADING;

        var family = new FontFamily(
            fontFamilyCollection.generatePlaceholderName(),
            FontSources.URL);

        var promises = _.map($scope.urlFields, function(urlField) {
            return family.addFontFromUrl(urlField.url);
        });

        $q.all(promises)
            .then(function() {
                fontFamilyCollection.add(family);
                init();
            }, function() {
                // TODO: pop up an error.
                init();
            });
    };

    $scope.removeUrl = function(index) {
        if ($scope.urlFields.length > 1) {
            $scope.urlFields.splice(index, 1);
        } else {
            $scope.urlFields[0] = angular.copy(PLACEHOLDER_URL);
        }
    };

    init();
};
