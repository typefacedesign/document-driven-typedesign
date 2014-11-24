'use strict';

var angular = require('../angular');
var opentype = require('opentype.js');


angular.module('ddt').constant('FontFamilySources', {
    FILE: 'file',
    URL: 'url',
    GOOGLE_FONTS: 'google_fonts'
});


angular.module('ddt').factory('FontFamily', function($q, FontFamilySources) {
    var FontFamily = function(name, source) {
        if (angular.isUndefined(name)) {
            throw new Error('No name specified for new FontFamily.');
        }

        this.name = name;
        this.source = source || FontFamilySources.FILE;
        this.fonts = [];
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
                family.fonts.push(opentype.parse(fileReader.result));
                deferred.resolve();
            } catch (e) {
                deferred.reject({error: e, file: file});
            }
        };
        fileReader.readAsArrayBuffer(file);

        return deferred.promise;
    };

    FontFamily.prototype.addFontFromUrl = function () {
    };

    return FontFamily;
});
