'use strict';


module.exports = function($scope, confirmDialog, fontMetadataEditor) {
    $scope.editFontMetadata = function() {
        fontMetadataEditor($scope.font);
    };

    $scope.deleteFont = function() {
        confirmDialog('Confirm Delete', 'Are you sure you want to delete this font?')
            .then(function() {
                $scope.font.family.removeFont($scope.font);
            });
    };
};
