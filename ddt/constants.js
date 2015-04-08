'use strict';

var angular = require('./lib/angular');


var app = angular.module('ddt');

app.constant('FontCardTypes', {
    LETTER: 'letter',
    WORD: 'word',
    SENTENCE: 'sentence',
    PARAGRAPH: 'paragraph',
    RICH_TEXT: 'rich_text',
    LAYOUT: 'layout'
});

app.constant('FontComparisonTypes', {
    SIDE_BY_SIDE: 'side_by_side',
    OPACITY: 'opacity',
    ANIMATED_TOGGLE: 'animated_toggle',
    MASK: 'mask',
    DIFF: 'diff'
});

app.constant('ErrorMessages', {
    UNRECOGNIZED_FONT_SOURCE: 'Unrecognized font source: ',
    MISMATCHING_FAMILY: 'Cannot add font to this family. Family names don\'t match.',
    FAMILY_DOES_NOT_EXIST: 'This family does not exist in this collection.',
    FONT_ALREADY_HAS_FAMILY: 'This font belongs to a different family. You cannot add it to this family.',
    FAMILY_ALREADY_EXISTS: 'A font family with this name already exists.'
});

app.constant('FontCases', {
    UNSPECIFIED: 'unspecified',
    UPPERCASE: 'uppercase',
    LOWERCASE: 'lowercase',
    TITLECASE: 'capitalize'
});

app.constant('TextAlignment',  {
    LEFT: 'left',
    CENTER: 'center',
    RIGHT: 'right'
});

app.constant('DEFAULT_TEXT_COLOR', '#333');
app.constant('DEFAULT_BACKGROUND_COLOR', '#ffffff');
app.constant('LETTERS', 'abcdefghijklmnopqrstuvwxyz'.split(''));
app.constant('GOOGLE_FONTS_API_URL', 'https://www.googleapis.com/webfonts/v1/webfonts?key=');
app.constant('GOOGLE_FONTS_API_KEY', 'AIzaSyAhOJNHWlDWFcp410Bzrr3TYw6NvkrQmAw');

app.constant('COLORS', [
    '#337ab7',
    '#5cb85c',
    '#5bc0de',
    '#f0ad4e',
    '#d9534f'
]);

app.constant('EventTypes', {
    COMPARISON_TYPE_CHANGED: 'ddt:comparisonTypeChanged'
});

app.constant('LocalStorageKeys', {
    FAMILIES_TO_COMPARE: 'ddt:familiesToCompare',
    LAST_USED_CARD_TYPE: 'ddt:lastUsedCardType',
    LAST_USED_COMPARISON_TYPE: 'ddt:lastUsedComparisonType',
    LAST_USED_FONT_PARAMETERS: 'ddt:lastUsedFontParameters',
    TESTING_ANSWERED_QUESTIONS: 'ddt:testingAnsweredQuestions'
});
