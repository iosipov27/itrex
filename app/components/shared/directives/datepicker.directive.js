angular.module('bookingComponentsModule').directive('datepicker', () => {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.datepicker();
        }
    };
});