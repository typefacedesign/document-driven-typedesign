'use strict';

var angular = require('../angular');
var _ = require('lodash');


angular.module('ddt').factory('fontFaceCollection', function(FontSources) {
    var fontFaces = new Map();

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
        var faceName = font.name;

        if (angular.isDefined(fontFaces.get(faceName))) {
            for (var i = 2; angular.isDefined(fontFaces.get(faceName + ' ' + i.toString)); i++) {}
            faceName = faceName + ' ' + i.toString();
        }

        if (font.source === FontSources.FILE) {
            font.getDataUrl()
                .then(function (dataUrl) {
                    var cssRule = '' +
                        'font-family: "' + faceName + '";' +
                        'src: url(' + dataUrl + ');';
                    _addCSSRule('@font-face', cssRule);
                });
        } else if (font.source === FontSources.URL) {
            var cssRule = '' +
                'font-family: "' + faceName + '";' +
                'src: url(' + font.url + ');';
            _addCSSRule('@font-face', cssRule);
        }

        fontFaces.set(faceName, font);

        // TODO: not a good idea to modify the parameter like this. Do this more elegantly.
        font.faceName = faceName;
    };

    return {
        add: add
    };
});
