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

angular.module('ddt').constant('FontComparisonTypes', {
    SIDE_BY_SIDE: 'side_by_side',
    OPACITY: 'opacity',
    MASK: 'mask',
    DIFF: 'diff'
});

angular.module('ddt').constant('ErrorMessages', {
    UNRECOGNIZED_FONT_SOURCE: 'Unrecognized font source: ',
    MISMATCHING_FAMILY: 'Cannot add font to this family. Family names don\'t match.',
    FAMILY_DOES_NOT_EXIST: 'This family does not exist in this collection.',
    FONT_ALREADY_HAS_FAMILY: 'This font belongs to a different family. You cannot add it to this family.',
    FAMILY_ALREADY_EXISTS: 'A font family with this name already exists.'
});

angular.module('ddt').constant('FontCases', {
    UNSPECIFIED: 'unspecified',
    UPPERCASE: 'uppercase',
    LOWERCASE: 'lowercase',
    TITLECASE: 'capitalize'
});


angular.module('ddt').constant('DEFAULT_TEXT_COLOR', '#333');
angular.module('ddt').constant('LETTERS', 'abcdefghijklmnopqrstuvwxyz'.split(''));
angular.module('ddt').constant('GOOGLE_FONTS_API_URL', 'https://www.googleapis.com/webfonts/v1/webfonts?key=');
angular.module('ddt').constant('GOOGLE_FONTS_API_KEY', 'AIzaSyAhOJNHWlDWFcp410Bzrr3TYw6NvkrQmAw');
