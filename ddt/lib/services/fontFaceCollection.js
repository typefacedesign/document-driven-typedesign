'use strict';

var angular = require('../angular');
var _ = require('lodash');


angular.module('ddt').factory('fontFaceCollection', function(FontSources) {
    var fontFaces = [];

    var _addCSSRule = function(selector, rules) {
        var styleElement = document.createElement('style');

        // We need this to get around a Safari bug.
        styleElement.appendChild(document.createTextNode(''));

        document.head.appendChild(styleElement);

        var stylesheet = styleElement.sheet;
        if ('insertRule' in stylesheet) {
            stylesheet.insertRule(selector + '{' + rules + '}', stylesheet.cssRules.length);
        } else if ('addRule' in stylesheet) {
            stylesheet.addRule(selector, rules);
        }
    };

    var add = function(font) {
        var existingFace = _.find(fontFaces, function(face) {
            return face.name === font.fileName;
        });

        if (angular.isDefined(existingFace)) {
            throw new Error('A font face with name "' + name + '" already exists.');
        }

        font.getDataUrl()
            .then(function(dataUrl) {
                var cssRule = '' +
                    'font-family: "' + font.fileName + '";' +
                    'src: url(' + dataUrl + ');';
                _addCSSRule('@font-face', cssRule);
            });
    };

    return {
        add: add
    };
});
