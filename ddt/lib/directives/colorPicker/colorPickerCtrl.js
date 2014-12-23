'use strict';


module.exports = function($scope, DEFAULT_TEXT_COLOR) {
    var init = function() {
        $scope.colors = [
            DEFAULT_TEXT_COLOR,
            '#636363',
            '#8C8C8C',
            '#D6D6D6',
            '#FF0000',
            '#0FD641',
            '#0F4CD1',
            '#FFEE00',
            '#14DDE0',
            '#FA5FF0'
        ];

        $scope.color = $scope.colors[0];
    };

    $scope.switchColor = function(color) {
        $scope.color = color;
    };

    init();
};
