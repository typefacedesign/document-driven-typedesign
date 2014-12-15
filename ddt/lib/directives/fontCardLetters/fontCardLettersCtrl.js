'use strict';


module.exports = function($scope) {
    var LETTERS_PER_ROW = 5;

    var init = function() {
        // TODO: we'll eventually want several collections of letters for different languages.
        var letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
        $scope.letters = [];
        for (var i = 0; i < letters.length; i += LETTERS_PER_ROW) {
            $scope.letters.push(letters.slice(i, i + LETTERS_PER_ROW));
        }
        $scope.fontSize = $scope.fontSize || 36;
    };

    init();
};
