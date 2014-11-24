'use strict';


module.exports = function ($scope, filePicker) {
    $scope.pickFiles = function() {
        filePicker.pick()
            .then(function (files) {
                $scope.onPick({pickedFiles: files});
            });
    };
};
