angular.module('sharedModule').directive('datepicker', () => {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.datepicker();
        }
    }
});