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

angular.module('ddt').constant('ErrorMessages', {
    UNRECOGNIZED_FONT_SOURCE: 'Unrecognized font source: ',
    MISMATCHING_FAMILY: 'Cannot add font to this family. Family names don\'t match.',
    FAMILY_DOES_NOT_EXIST: 'This family does not exist in this collection.'
});

angular.module('ddt').constant('FontCases', {
    UNSPECIFIED: 'unspecified',
    UPPERCASE: 'uppercase',
    LOWERCASE: 'lowercase',
    TITLECASE: 'capitalize'
});


angular.module('ddt').constant('DEFAULT_TEXT_COLOR', '#333');