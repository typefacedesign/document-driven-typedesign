'use strict';


module.exports = function($scope) {
    var init = function() {
        // TODO: ugly. There ought to be a cleaner way of doing this.
        $scope.$watch('test', function(newval, oldval) {
            if (angular.isUndefined(oldval) && angular.isDefined(newval)) {
                $scope.currentQuestion = $scope.test.getNextQuestion();
            }
        });
    };

    $scope.setAnswer = function(questionId, index) {
        $scope.test.setAnswer(questionId, index);
        $scope.currentQuestion = $scope.test.getNextQuestion();
    };

    $scope.previousQuestion = function() {
    };

    $scope.skipQuestion = function() {
    };

    init();
};
