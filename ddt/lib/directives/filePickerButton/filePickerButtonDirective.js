'use strict';


module.exports = function() {
    return {
        restrict: 'E',
        templateUrl: 'lib/directives/filePickerButton/filePickerButton.html',
        link: function(scope, element, attrs, controllers) {
            var filePickerProxyButton = element.find('.ddt-file-picker-proxy-button')[0];
            var filePickerInput = element.find('.ddt-file-picker-input')[0];

            filePickerProxyButton.addEventListener('click', function() {
                filePickerInput.click();
            });

            filePickerInput.addEventListener('change', function(event) {
                var files = event.target.files;
            });
        }
    };
};
