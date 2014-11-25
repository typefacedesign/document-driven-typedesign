'use strict';

var angular = require('../angular');
var $ = require('jquery');


angular.module('ddt').factory('confirmDialog', function($rootScope, $compile, $q) {
    var template = '' +
        '<div class="modal fade ddt-confirm-modal" tabindex="-1" role="dialog">' +
            '<div class="modal-dialog">' +
                '<div class="modal-content">' +
                    '<div class="modal-header">' +
                        '<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>' +
                        '<h4 class="modal-title" id="myModalLabel">{{ title }}</h4>' +
                    '</div>' +

                    '<div class="modal-body">' +
                        '{{ message }}' +
                    '</div>' +

                    '<div class="modal-footer">' +
                        '<button type="button" class="btn btn-default" data-dismiss="modal" ng-click="cancel()">Cancel</button>' +
                        '<button type="button" class="btn btn-primary" ng-click="ok()">Ok</button>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>';

    var modalScope = $rootScope.$new();
    var modalElement = $compile(template)(modalScope);
    $('body').append(modalElement);

    return function(title, message) {
        var deferred = $q.defer();

        modalScope.title = title;
        modalScope.message = message;

        modalScope.ok = function() {
            deferred.resolve();
            $(modalElement).modal('hide');
        };

        modalScope.cancel = function() {
            deferred.reject();
            $(modalElement).modal('hide');
        };

        $(modalElement).modal('show');

        return deferred.promise;
    };
});
