'use strict';

var angular = require('../angular');
var opentype = require('opentype.js');
var _ = require('lodash');


angular.module('ddt').constant('FontSources', {
    FILE: 'file',
    URL: 'url',
    GOOGLE_FONTS: 'google_fonts'
});


angular.module('ddt').factory('Font', function($q, FontSources, ErrorMessages) {
    var Font = function(opts) {
        this.source = opts.source;

        var fileSplit;
        if (opts.source === FontSources.URL) {
            this.url = opts.url;
            this.fileName = this.url.split(/[\\/]/).pop();
            fileSplit = _splitFileName(this.fileName);
            this.fileName = fileSplit[0];
            this.fileExt = fileSplit[1];
        } else if (opts.source === FontSources.FILE) {
            this.file = opts.file;
            fileSplit = _splitFileName(this.file.name);
            this.fileName = fileSplit[0];
            this.fileExt = fileSplit[1];
        } else {
            throw new Error(ErrorMessages.UNRECOGNIZED_FONT_SOURCE + opts.source);
        }
    };

    // Static method to create a new font. Returns a promise that
    // resolves with the newly created font object.
    Font.make = function(opts) {
        var deferred = $q.defer();

        var ddtFont = new Font(opts);

        if (opts.source === FontSources.URL) {
            // TODO: keep raw font data around for fonts loaded from URLs so we can get their data URLs.
            // We shouldn't have to handle fonts loaded from different sources differently in the code,
            // except at the construction phase. The way to do that is to parse them using opentype.js
            // here, and create data URLs for them here.
            opentype.load(opts.url, function(err, openTypeFont) {
                if (err) {
                    deferred.reject(err);
                    return;
                }

                _copyMetadata(ddtFont, openTypeFont);
                deferred.resolve(ddtFont);
            });
        } else if (opts.source === FontSources.FILE) {
            var fileReader = new FileReader();
            fileReader.onload = function() {
                var openTypeFont = opentype.parse(fileReader.result);
                _copyMetadata(ddtFont, openTypeFont);
                deferred.resolve(ddtFont);
            };
            fileReader.readAsArrayBuffer(ddtFont.file);
        } else {
            deferred.reject(new Error(ErrorMessages.UNRECOGNIZED_FONT_SOURCE + opts.source));
        }

        return deferred.promise;
    };

    Font.prototype.getDataUrl = function() {
        var font = this;

        if (this.source !== FontSources.FILE) {
            throw new Error('Only fonts loaded from files can be read as data URLs. Source for this font: ' + font.source);
        }

        var deferred = $q.defer();

        if (angular.isUndefined(font.dataUrl)) {
            var fileReader = new FileReader();
            fileReader.onload = function() {
                font.dataUrl = fileReader.result;
                deferred.resolve(font.dataUrl);
            };
            fileReader.readAsDataURL(font.file);
        } else {
            deferred.resolve(font.dataUrl);
        }

        return deferred.promise;
    };

    var _splitFileName = function(fileName) {
        var fileSplit = fileName.split('.');
        return [_.first(fileSplit, fileSplit.length - 1).join(''), _.last(fileSplit)];
    };

    var _copyMetadata = function(ddtFont, openTypeFont) {
        ddtFont.familyName = openTypeFont.familyName;
        ddtFont.styleName = openTypeFont.styleName;
        ddtFont.name = ddtFont.familyName + ' ' + ddtFont.styleName;
    };

    return Font;
});
