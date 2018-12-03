angular.module('sharedModule').filter('formattedDate', ($filter) => {
    var dateFilter = $filter('date');

    function formatDate(date) {
        var dateOut = new Date(date);
        return dateOut;
    };

    return function (dateString, attr) {
        return dateFilter(formatDate(dateString), attr);
    }
});