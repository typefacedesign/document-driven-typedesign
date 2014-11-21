'use strict';

var _ = require('lodash');


module.exports = function ($scope, FontCardTypes, fontFamilyCollection, FontFamilyCollectionEvents) {
    $scope.FontCardTypes = FontCardTypes;
    $scope.families = fontFamilyCollection.families();
    $scope.groupedFamilies = [];

    $scope.isType = function(typeToCheck) {
        return $scope.fontCardType === typeToCheck;
    };

    // The number of cells in the <ddt-font-cards-view> grid changes
    // depending on the font card type. For example, we display three
    // word cards per row but only one sentence card per row.
    // This function sets up $scope.groupedFamilies in a way that the
    // template doesn't have to worry about how many items it needs to
    // display per row.
    var groupFamilies = function() {
        // First, empty the existing groupedFamilies array on $scope.
        // TODO: What happens if we replace the existing array with a new one?
        // TODO: Benchmark the two approaches and find out.
        $scope.groupedFamilies.length = 0;

        var familiesCount = fontFamilyCollection.count();

        switch ($scope.fontCardType) {
            case FontCardTypes.WORD:
                // The first group always contains two families, since we need space
                // for <ddt-font-card-add>.
                var group = [];
                var i;
                for (i = 0; i < 2; i++) {
                    if (angular.isDefined($scope.families[i])) {
                        group.push($scope.families[i]);
                    } else {
                        break;
                    }
                }

                $scope.groupedFamilies.push(group);

                // If we don't have any more families, return now.
                if (familiesCount <= 2) {
                    return;
                }

                // The remaining groups contain three families each.
                group = [];
                for (i = 2; i < familiesCount; i++) {
                    // If we already have 3 families in our group, and the list
                    // contains more families, push this group to the list of groups
                    // and start creating a new one.
                    if (group.length === 3 && angular.isDefined($scope.families[i+1])) {
                        $scope.groupedFamilies.push(group);
                        group = [];
                    }

                    if (angular.isUndefined($scope.families[i])) {
                        break;
                    } else {
                        group.push($scope.families[i]);
                    }
                }

                $scope.groupedFamilies.push(group);
        }
    };

    // Regroup families every time a new one is added.
    $scope.$on(FontFamilyCollectionEvents.ADDED, function() {
        groupFamilies();
    });
};
