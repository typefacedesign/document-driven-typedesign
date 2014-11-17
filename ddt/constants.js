'use strict';

var angular = require('./lib/angular');


angular.module('ddt').constant('FontCardTypes', {
    LETTER: 'letter',
    WORD: 'word',
    SENTENCE: 'sentence',
    PARAGRAPH: 'paragraph',
    RICH_TEXT: 'rich_text',
    LAYOUT: 'layout'
});
