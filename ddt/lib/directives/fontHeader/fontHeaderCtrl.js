'use strict';


module.exports = function($scope, fontFamilyCollection, confirmDialog) {
    $scope.removeFont = function() {
        confirmDialog('Confirm Delete', 'Do you want to delete this font?')
            .then(function() {
                $scope.fontFamily.removeFont($scope.font);

                if ($scope.fontFamily.size() === 0) {
                    fontFamilyCollection.remove($scope.fontFamily);
                }
            });
    };
};
