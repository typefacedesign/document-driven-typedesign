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
        this.family = null;
        this.faceName = null;

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

        this._defineProperties();
    };

    Font.prototype._defineProperties = function() {
        Object.defineProperty(this, 'weight', {
            get: function() {
                return this._weight;
            },
            set: function(weight) {
                this._weight = weight;

                if (angular.isDefined(this.family) && this.family !== null) {
                    this.family.sortFonts();
                }
            }
        });

        Object.defineProperty(this, 'name', {
            get: function() {
                return this.familyName + ' ' + this.subFamilyName;
            }
        });
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

    Font.prototype.serialize = function() {
        var font = this;
        var deferred = $q.defer();

        var serializedFont = _.pick(font, [
            'source', 'faceName', 'fileName', 'fileExt', '_weight', 'familyName', 'subFamilyName',
            'versionString', 'isItalic', 'glyphs'
        ]);

        if (font.source === FontSources.URL) {
            serializedFont.url = font.url;
            deferred.resolve(serializedFont);
        } else if (font.source === FontSources.FILE) {
            this.getDataUrl()
                .then(function(dataUrl) {
                    serializedFont.file = _.pick(font.file, ['name']);
                    serializedFont.dataUrl = dataUrl;
                    deferred.resolve(serializedFont);
                }, deferred.reject);
        }

        return deferred.promise;
    };

    Font.deserialize = function(deserializedFont) {
        var deferred = $q.defer();

        var font = _.create(Font.prototype, deserializedFont);
        font._defineProperties();
        deferred.resolve(font);

        return deferred.promise;
    };

    var _splitFileName = function(fileName) {
        var fileSplit = fileName.split('.');
        return [_.first(fileSplit, fileSplit.length - 1).join(''), _.last(fileSplit)];
    };

    var _copyMetadata = function(ddtFont, openTypeFont) {
        if (angular.isDefined(openTypeFont.tables.name.preferredFamily) &&
            angular.isDefined(openTypeFont.tables.name.preferredSubfamily)) {
            ddtFont.familyName = openTypeFont.tables.name.preferredFamily;
            ddtFont.subFamilyName = openTypeFont.tables.name.preferredSubfamily;
        } else {
            ddtFont.familyName = openTypeFont.familyName;
            ddtFont.subFamilyName = openTypeFont.styleName;
        }

        ddtFont.weight = openTypeFont.tables.os2.usWeightClass;
        ddtFont.versionString = openTypeFont.tables.name.version.replace(/[vV]ersion\s*/, '');

        // The first bit of fsSelection tells us whether the font is italic.
        ddtFont.isItalic = (openTypeFont.tables.os2.fsSelection & 1) === 1;

        ddtFont.glyphs = _.map(_.keys(openTypeFont.tables.cmap.glyphIndexMap), function(charCode) {
            return String.fromCodePoint(charCode);
        });
    };

    return Font;
});
