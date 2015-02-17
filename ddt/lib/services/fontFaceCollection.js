'use strict';

var angular = require('../angular');
var _ = require('lodash');


angular.module('ddt').factory('fontFaceCollection', function(FontSources) {
    var fontFaces, stylesheet;

    var init = function() {
        fontFaces = new Map();

        var styleElement = document.createElement('style');

        // We need this to get around a Safari bug.
        styleElement.appendChild(document.createTextNode(''));

        document.head.appendChild(styleElement);

        stylesheet = styleElement.sheet;
    };

    var _addCSSRule = function(selector, rules) {
        var index = stylesheet.cssRules.length;

        if ('insertRule' in stylesheet) {
            stylesheet.insertRule(selector + '{' + rules + '}', index);
        } else if ('addRule' in stylesheet) {
            stylesheet.addRule(selector, rules);
        }

        return index;
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
        return faceName;
    };

    var remove = function(font) {
        for (var i = 0; i < stylesheet.cssRules.length; i++) {
            var name = stylesheet.cssRules[i].style.fontFamily.replace(/^'/, '').replace(/'$/, '');
            if (name === font.faceName) {
                stylesheet.removeRule(i);
                return;
            }
        }
    };

    init();

    return {
        add: add,
        remove: remove
    };
});
