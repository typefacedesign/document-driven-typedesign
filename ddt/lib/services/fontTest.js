'use strict';

var angular = require('../angular.js');
var _ = require('lodash');


angular.module('ddt').factory('FontTest', function($http, $q) {
    var FontTest = function(name, questions) {
        this.name = name;
        this.questions = questions;

        this.questions = _.sortBy(this.questions, function(question) {
            return question.id;
        });

        // Load answered questions from localStorage.
        this.answeredQuestions = _loadAnsweredQuestions(this.name);
    };

    FontTest.make = function(url) {
        var deferred = $q.defer();

        var testIndexUrl = url + '/index.json';
        $http.get(testIndexUrl)
            .then(function(response) {
                deferred.resolve(new FontTest(response.data.name, response.data.questions));
            }, deferred.reject);

        return deferred.promise;
    };

    // Returns the next un-answered question in the test.
    FontTest.prototype.getNextQuestion = function() {
        for (let question of this.questions) {
            if (_.contains(this.answeredQuestions, question.id)) {
                continue;
            }

            return question;
        }
    };

    // Sets the answer to the current question and stores it in
    // localStorage.
    FontTest.prototype.setAnswer = function(index) {
    };

    FontTest.getStatistics = function() {
    };

    var _loadAnsweredQuestions = function(testName) {
        var answeredQuestions = JSON.parse(localStorage.getItem('answeredQuestions'));
        if (answeredQuestions === null) {
            answeredQuestions = {};
            answeredQuestions[testName] = [];
            localStorage.setItem('answeredQuestions', JSON.stringify(answeredQuestions));
        }

        return answeredQuestions[testName];
    };

    return FontTest;
});
