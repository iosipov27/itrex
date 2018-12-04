angular.module('bookingComponentsModule').controller('FlightsCtrl', ['$scope', 'DataExchangeService',
    function ($scope, DataExchangeService) {

        init.call(this);
        function init() {
            this.type = 'flights';
        }

        $scope.$on('search', () => {
            DataExchangeService.set('internalFormData', { fromDate: this.fromDate, toDate: this.toDate, type: this.type });
        });

        $scope.$on('clear', () => {
            this.fromDate = null;
            this.toDate = null;
        });

    }]);