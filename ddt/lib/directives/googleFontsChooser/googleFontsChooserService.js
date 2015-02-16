/* globals angular */
'use strict';


module.exports = function($rootScope, $compile) {
    var template = '<ddt-google-fonts-chooser></ddt-google-fonts-chooser>';
    var modalScope = $rootScope.$new();
    var modalElement = $compile(template)(modalScope);
    angular.element('body').append(modalElement);

    modalScope.close = function() {
        modalElement.find('.modal').modal('hide');
    };

    return function() {
        modalElement.find('.modal').modal('show');
    };
};
