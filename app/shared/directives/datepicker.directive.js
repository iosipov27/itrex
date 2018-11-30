angular.module('sharedModule').directive('datepicker', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.datepicker();
        }
    }
});