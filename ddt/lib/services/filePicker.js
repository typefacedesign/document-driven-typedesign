'use strict';

var angular = require('../angular');
var $ = require('jquery');


angular.module('ddt').factory('filePicker', function($q) {
    // Services are only initialized once, so doing this here is safe.
    var fileInput = $('<input type="file" multiple class="ddt-file-picker-input"/>');
    $('body').append(fileInput);

    var deferred;

    fileInput.on('change', function(event) {
        deferred.resolve(event.target.files);
    });

    var pick = function() {
        deferred = $q.defer();

        fileInput.click();

        return deferred.promise;
    };

    return {
        pick: pick
    };
});
