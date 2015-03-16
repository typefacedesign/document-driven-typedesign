'use strict';


module.exports = function($scope, $localForage, FontCardTypes, fontParameters, FontFamily,
                          fontFamilyCollection) {
    var init = function() {
        $scope.cardType = localStorage.getItem('cardType') || FontCardTypes.WORD;
        $scope.fontParameters = fontParameters.current;

        // Load serialized font families when service is initialized.
        _loadSerializedFontFamilies();
    };

    var _loadSerializedFontFamilies = function() {
        $localForage.iterate(function(serializedFamily) {
            FontFamily.deserialize(serializedFamily)
                .then(function(fontFamily) {
                    fontFamilyCollection.add(fontFamily, true);
                });
        });
    };

    init();
};
