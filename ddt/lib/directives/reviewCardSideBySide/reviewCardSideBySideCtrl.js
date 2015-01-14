'use strict';


module.exports = function($scope, fontFamilyCollection, FontCardTypes, testStrings) {
    var init = function() {
        // TODO: make this a constant.
        $scope.letters = 'abcdefghjklmnopqrstuvwxyz'.split('');
        $scope.FontCardTypes = FontCardTypes;
        $scope.testWord = testStrings[FontCardTypes.WORD].text;
    };

    init();
};
