'use strict';


module.exports = function() {
    return {
        restrict: 'E',
        templateUrl: 'lib/directives/dottedPaginator/dottedPaginator.html',
        controller: 'DottedPaginatorCtrl',
        scope: {
            totalPages: '=',
            currentPage: '='
        }
    };
};
