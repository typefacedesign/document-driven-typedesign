'use strict';

var angular = require('../angular.js');
var _ = require('lodash');


angular.module('ddt').factory('FontTest', function($http, $q, LocalStorageKeys) {
    var FontTest = function(name, directory, questions) {
        this.name = name;
        this.directory = directory;
        this.questions = questions;

        this.questions = _.sortBy(this.questions, function(question) {
            return question.id;
        });

        // Load answered questions from localStorage.
        this.answeredQuestions = _loadAnsweredQuestions(this.name);
    };

    FontTest.make = function(directory) {
        var deferred = $q.defer();
        var url = 'fontTests/' + directory;

        var testIndexUrl = url + '/index.json';
        $http.get(testIndexUrl)
            .then(function(response) {
                deferred.resolve(new FontTest(
                    response.data.name,
                    directory,
                    response.data.questions
                ));
            }, deferred.reject);

        return deferred.promise;
    };

    // Returns the next un-answered question in the test.
    FontTest.prototype.getFirstUnansweredQuestionIndex = function() {
        var index = angular.isUndefined(this.currentQuestionIndex)? 0 : this.currentQuestionIndex;
        for (var i = index; i < this.questions.length; i++) {
            if (angular.isDefined(this.answeredQuestions[this.questions[i].id])) {
                continue;
            }

            return i;
        }
    };

    FontTest.prototype.getNextQuestion = function() {
        if (angular.isUndefined(this.currentQuestionIndex)) {
            this.currentQuestionIndex = this.getFirstUnansweredQuestionIndex();
        } else if (this.currentQuestionIndex < this.questions.length) {
            this.currentQuestionIndex++;
        } else {
            return null;
        }

        return this.questions[this.currentQuestionIndex];
    };

    // Sets the answer to the current question and stores it in
    // localStorage.
    FontTest.prototype.setAnswer = function(questionId, index) {
        var answeredQuestions = JSON.parse(localStorage.getItem(LocalStorageKeys.TESTING_ANSWERED_QUESTIONS));
        this.answeredQuestions[questionId] = index;
        answeredQuestions[this.name] = this.answeredQuestions;
        localStorage.setItem(LocalStorageKeys.TESTING_ANSWERED_QUESTIONS, JSON.stringify(answeredQuestions));
    };

    FontTest.prototype.getPreviousQuestion = function() {
        this.currentQuestionIndex--;
        return this.questions[this.currentQuestionIndex];
    };

    FontTest.prototype.getAnsweredQuestions = function() {
        var answeredQuestions = JSON.parse(localStorage.getItem(LocalStorageKeys.TESTING_ANSWERED_QUESTIONS));
        return answeredQuestions[this.name];
    };

    FontTest.prototype.getAnsweredQuestionsLength = function() {
        return _.size(this.getAnsweredQuestions());
    };

    FontTest.prototype.getProgress = function() {
        return Math.floor((this.getAnsweredQuestionsLength()/this.questions.length) * 100);
    };

    FontTest.getAnswer = function(testName, questionId) {
        var answeredQuestions = JSON.parse(localStorage.getItem(LocalStorageKeys.TESTING_ANSWERED_QUESTIONS));
        return answeredQuestions[testName][questionId];
    };

    FontTest.getIndex = function() {
        var deferred = $q.defer();

        $http.get('fontTests/index.json')
            .then(function(response) {
                deferred.resolve(response.data);
            }, deferred.reject);

        return deferred.promise;
    };

    var _loadAnsweredQuestions = function(testName) {
        var answeredQuestions = JSON.parse(localStorage.getItem(LocalStorageKeys.TESTING_ANSWERED_QUESTIONS));
        if (answeredQuestions === null) {
            answeredQuestions = {};
            answeredQuestions[testName] = {};
            localStorage.setItem(LocalStorageKeys.TESTING_ANSWERED_QUESTIONS, JSON.stringify(answeredQuestions));
        }

        return answeredQuestions[testName];
    };

    return FontTest;
});
