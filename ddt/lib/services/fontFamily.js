'use strict';

var angular = require('../angular');
var opentype = require('opentype.js');


angular.module('ddt').factory('FontFamily', function($q) {
    var FontFamily = function(name) {
        if (angular.isUndefined(name)) {
            throw new Error('No name specified for new FontFamily.');
        }

        this.name = name;
        this.fonts = [];
    };

    FontFamily.prototype.addFontFromFile = function(file) {
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
