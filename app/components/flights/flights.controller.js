angular.module('bookingComponentsModule').controller('FlightsCtrl', ['$scope', 'DataExchangeService',
    function ($scope, DataExchangeService) {

        let vm = {};
        $scope.vmFlCtrl = vm;

        init();
        function init() {
            vm.type = 'flights';
        }

        $scope.$watchGroup(['vmFlCtrl.fromDate', 'vmFlCtrl.toDate'], () => {
            DataExchangeService.set('internalFormData', $scope.vmFlCtrl);
        });

        $scope.$on('clear', () => {
            vm.fromDate = null;
            vm.toDate = null;
        });

    }]);