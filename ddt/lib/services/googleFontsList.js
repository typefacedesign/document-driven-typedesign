'use strict';

var angular = require('../angular');


angular.module('ddt').factory('googleFontsList', function($q, $http,
                                                          GOOGLE_FONTS_API_URL,
                                                          GOOGLE_FONTS_API_KEY) {
    var fontsList;

    var getFontsList = function() {
        var deferred = $q.defer();

        if (angular.isUndefined(fontsList)) {
            var url = GOOGLE_FONTS_API_URL + GOOGLE_FONTS_API_KEY;
            $http.get(url)
                .then(function(result) {
                    fontsList = result.data.items;
                    deferred.resolve(fontsList);
                });
        } else {
            deferred.resolve(fontsList);
        }

        return deferred.promise;
    };

    return {
        getFontsList: getFontsList
    };
});
