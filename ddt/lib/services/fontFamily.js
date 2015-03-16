'use strict';

var angular = require('../angular');
var _ = require('lodash');


angular.module('ddt').factory('FontFamily', function($q, $http, Font, FontSources,
                                                     ErrorMessages, fontFaceCollection,
                                                     fontFamilyCollection) {
    var FontFamily = function(name, source) {
        if (angular.isUndefined(name)) {
            throw new Error('No name specified for new FontFamily.');
        }

        this.name = name;
        this.source = source || FontSources.FILE;
        this.fonts = [];
    };

    FontFamily.make = function(name, source) {
        var newFamilyName = name;
        if (angular.isDefined(fontFamilyCollection.findByName(newFamilyName))) {
            for (var counter = 2;
                 angular.isDefined(fontFamilyCollection.findByName(newFamilyName + ' ' + counter.toString()));
                 counter++) {
            }

            newFamilyName = newFamilyName + ' ' + counter.toString();
        }

        return new FontFamily(newFamilyName, source);
    };

    FontFamily.prototype.addFontFromFile = function(file) {
        if (this.source !== FontSources.FILE) {
            throw new Error('Mismatching font family source. This family: ' + this.source);
        }

        var family = this;
        var deferred = $q.defer();

        Font.make({source: FontSources.FILE, file: file})
            .then(function(font) {
                family._pushFont(font);
                deferred.resolve();
            }, function(error) {
                deferred.reject(error);
            });

        return deferred.promise;
    };

    FontFamily.prototype.addFontFromUrl = function(url) {
        if (this.source !== FontSources.URL) {
            throw new Error('Mismatching font family source. This family: ' + this.source);
        }

        var family = this;
        var deferred = $q.defer();

        Font.make({source: FontSources.URL, url: url})
            .then(function(font) {
                family._pushFont(font);
                deferred.resolve();
            }, function(error) {
                deferred.reject(error);
            });

        return deferred.promise;
    };

    // Adds an array of Font objects to this family.
    FontFamily.prototype.addFonts = function(fonts) {
        var family = this;
        _.each(fonts, function(font) {
            family._pushFont(font);
        });
    };

    FontFamily.prototype._pushFont = function(font) {
        // Each font can only belong to one family. If the family
        // property on the font is non-null, that means someone
        // is trying to add a font that has already been added to
        // another family to this family, which is illegal.
        if (!(font.family === null || angular.isUndefined(font.family))) {
            throw new Error(ErrorMessages.FONT_ALREADY_HAS_FAMILY);
        } else {
            font.family = this;
        }

        this.fonts.push(font);
        font.faceName = fontFaceCollection.add(font);
        this.sortFonts();
    };

    FontFamily.prototype.removeFont = function(font) {
        font.family = null;
        _.pull(this.fonts, font);
        fontFaceCollection.remove(font);
    };

    FontFamily.prototype.size = function() {
        return this.fonts.length;
    };

    FontFamily.prototype.sortFonts = function() {
        // First, we group fonts by whether they are roman or italic.
        var groupedFonts = _.groupBy(this.fonts, function(font) {
            return font.isItalic;
        });

        // We now have an object with two keys: 'true' and 'false'.
        // Since the order of keys in an object is undefined, we
        // extract our grouped fonts into a multidimensional array.
        groupedFonts = [groupedFonts['false'], groupedFonts['true']];

        // Then sort each group by weight.
        for (var i = 0; i < 2; i++) {
            groupedFonts[i] = _.sortBy(groupedFonts[i], function (font) {
                return font.weight;
            });
        }

        // Finally, splice it back together.
        this.fonts = _.flatten(groupedFonts);
    };

    FontFamily.prototype.serialize = function() {
        // We only store attributes we need to recreate the family on app load.
        // Basically, all the parameters that FontFamily.make needs, plus the fonts
        // array. IndexedDB hates it if you try to put a non-JSONifiable object into
        // it.
        var deferred = $q.defer();
        var serializedFamily = _.pick(this, ['name', 'source']);
        var fontsPromises = _.map(this.fonts, function(font) {
            return font.serialize();
        });
        $q.all(fontsPromises)
            .then(function(serializedFonts) {
                serializedFamily.fonts = serializedFonts;
                deferred.resolve(serializedFamily);
            }, deferred.reject);

        return deferred.promise;
    };

    FontFamily.deserialize = function() {

    };

    return FontFamily;
});
