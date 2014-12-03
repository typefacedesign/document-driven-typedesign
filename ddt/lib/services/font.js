'use strict';

var angular = require('../angular');
var _ = require('lodash');


angular.module('ddt').constant('FontSources', {
    FILE: 'file',
    URL: 'url',
    GOOGLE_FONTS: 'google_fonts'
});


angular.module('ddt').factory('Font', function($q, FontSources) {
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
            throw new Error('Unrecognized font source: ' + opts.source);
        }
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

    return Font;
});
