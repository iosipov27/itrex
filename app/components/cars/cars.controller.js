angular.module('bookingComponentsModule').controller('CarsCtrl', ['$scope', 'CarsService', 'DataExchangeService',
  function ($scope, CarsService, DataExchangeService) {

    init.call(this);
    function init() {
      this.type = 'cars';
      this.carsTypes = CarsService.getCarsTypes();
    }

    $scope.$on('search', () => {
      DataExchangeService.set('internalFormData', { carType: this.carType, location: this.location, type: this.type });
    });

    $scope.$on('clear', () => {
      this.carType = null;
      this.location = null;
    });

  }]);