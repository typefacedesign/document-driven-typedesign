/* globals angular */
'use strict';

var _ = require('lodash');


module.exports = function($scope, filePicker, confirmDialog, fontFamilyCollection) {
    var init = function() {
        $scope.editingFamilyName = false;
        $scope.editMode = false;
    };

    $scope.addFont = function() {
        filePicker.pick()
            .then(function(files) {
                _.each(files, function(file) {
                    $scope.fontFamily.addFontFromFile(file);
                });
            });
    };

    $scope.deleteFamily = function() {
        confirmDialog('Confirm Delete', 'Do you want to delete this font family?')
            .then(function () {
                fontFamilyCollection.remove($scope.fontFamily);
            });
    };

    $scope.duplicate = function() {
        var newFamily = angular.copy($scope.fontFamily);
        newFamily.name = newFamily.name + ' Copy';
        fontFamilyCollection.add(newFamily);
    };

    $scope.rename = function() {
        $scope.editingFamilyName = true;
    };

    $scope.select = function() {
        fontFamilyCollection.addToComparison($scope.fontFamily);
    };

    $scope.deselect = function() {
        fontFamilyCollection.removeFromComparison($scope.fontFamily);
    };

    $scope.toggleEditMode = function() {
        $scope.editMode = !$scope.editMode;
    };

    init();
};
