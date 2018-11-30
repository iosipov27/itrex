angular.module('sharedModule').factory('HelperService', function () {
    let HelperService = Object.create(null);
    
    HelperService.formatDate = function (date) {
        var dateOut = new Date(date);
        return dateOut;
    };

    return HelperService;
});