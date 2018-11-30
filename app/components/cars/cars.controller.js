angular.module('bookingComponentsModule').controller('CarsCtrl', ['$scope', 'CarsService', 'DataExchangeService',
  function ($scope, CarsService, DataExchangeService) {

    let vm = {};
    $scope.vmCarsCtrl = vm;

    init();
    function init() {
      vm.type = 'cars';
      vm.carsTypes = CarsService.getCarsTypes();
    }

    $scope.$watchGroup(['vmCarsCtrl.carType', 'vmCarsCtrl.location'], () => {
      DataExchangeService.set('internalFormData', { carType: vm.carType, location: vm.location, type: vm.type });
    });


    $scope.$on('clear', () => {
      vm.carType = null;
      vm.location = null;
    });

  }]);