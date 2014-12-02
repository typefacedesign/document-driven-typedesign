'use strict';

var angular = require('../angular');
var opentype = require('opentype.js');
var _ = require('lodash');


angular.module('ddt').constant('FontFamilySources', {
    FILE: 'file',
    URL: 'url',
    GOOGLE_FONTS: 'google_fonts'
});


angular.module('ddt').factory('FontFamily', function($q, $http, FontFamilySources) {
    var FontFamily = function(name, source) {
        if (angular.isUndefined(name)) {
            throw new Error('No name specified for new FontFamily.');
        }

        this.name = name;
        this.source = source || FontFamilySources.FILE;
        this.fonts = [];
    };

    FontFamily.prototype.addFont = function(fileName, rawFontData) {
        this.fonts.push({
            fileName: fileName,
            rawFontData: rawFontData,
            font: opentype.parse(rawFontData)
        });
    };

    FontFamily.prototype.addFontFromFile = function(file) {
        if (this.source !== FontFamilySources.FILE) {
            throw new Error('Cannot add font from file to font family with source: ' + this.source);
        }

        var family = this;
        var deferred = $q.defer();

        var fileReader = new FileReader();
        fileReader.onload = function(e) {
            try {
                family.addFont(file.name, fileReader.result);
                deferred.resolve();
            } catch (e) {
                deferred.reject({error: e, file: file});
            }
        };
        fileReader.readAsArrayBuffer(file);

        return deferred.promise;
    };

    FontFamily.prototype.addFontFromUrl = function(url) {
        var family = this;
        var deferred = $q.defer();

        $http.get(url, {responseType: 'arraybuffer'})
            .then(function(response) {
                try {
                    family.addFont(url.replace(/^.*[\\\/]/, ''), response.data);
                    deferred.resolve();
                } catch (e) {
                    deferred.reject({error: e, url: url});
                }
            });

        return deferred.promise;
    };

    FontFamily.prototype.clone = function () {
        // Why can't we just do an angular.copy to deep copy a font family?
        // Because using angular.copy to copy the font object as returned by
        // opentype.js freezes the browser. My current solution is to re-parse
        // the font file.
        var deferred = $q.defer();
        var newFamily = new FontFamily(this.name + ' Copy', this.source);

        _.each(this.fonts, function (font) {
            newFamily.addFont(font.fileName, font.rawFontData);
        });

        deferred.resolve(newFamily);
        return deferred.promise;
    };

    return FontFamily;
});
