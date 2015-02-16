/* globals angular */
'use strict';

var _ = require('lodash');


module.exports = function($scope, filePicker, confirmDialog, fontFamilyCollection, comparisonMatrix) {
    var init = function() {
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

    $scope.addToComparison = function() {
        comparisonMatrix.addFamily($scope.fontFamily);
    };

    $scope.removeFromComparison = function() {
        comparisonMatrix.removeFamily($scope.fontFamily);
    };

    $scope.isAddedToComparison = function() {
        return comparisonMatrix.isAddedToComparison($scope.fontFamily);
    };

    $scope.toggleEditMode = function() {
        $scope.editMode = !$scope.editMode;
    };

    init();
};
