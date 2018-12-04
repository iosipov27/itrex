angular.module('bookingComponentsModule').filter('formattedDate', ['$filter', ($filter) => {
    var dateFilter = $filter('date');

    function formatDate(date) {
        var dateOut = new Date(date);
        return dateOut;
    };

    return function (dateString, attr) {
        return dateFilter(formatDate(dateString), attr);
    }
}]);