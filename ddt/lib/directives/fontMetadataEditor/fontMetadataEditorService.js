'use strict';


module.exports = function($rootScope, $compile) {
    var template = '<ddt-font-metadata-editor font="font"></ddt-font-metadata-editor>';
    var modalScope = $rootScope.$new();
    var modalElement = $compile(template)(modalScope);
    angular.element('body').append(modalElement);

    modalScope.close = function() {
        modalElement.find('.modal').modal('hide');
    };

    modalScope.save = function() {
        modalScope.font.subFamilyName = modalScope.metadata.subFamilyName;
        modalScope.font.weight = modalScope.metadata.weight;
        modalScope.close();
    };

    return function(font) {
        modalScope.font = font;
        modalScope.metadata = {
            subFamilyName: font.subFamilyName,
            weight: font.weight
        };
        modalElement.find('.modal').modal('show');
    };
};
