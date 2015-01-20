'use strict';


module.exports = function($scope) {
    $scope.selectFont = function(name, font) {
        $scope[name] = font;
    };
};
