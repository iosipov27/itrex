angular.module('bookingComponentsModule').controller('HotelsCtrl', ['$scope', 'HotelsService', '$sce', 'DataExchangeService',
  function ($scope, HotelsService, $sce, DataExchangeService) {

    let vm = {};
    $scope.vmHotCtrl = vm;

    init();
    function init() {
      vm.type = 'hotels';
      vm.ratings = HotelsService.getRatingsList().map((item) => {
        return { value: item.value, label: $sce.trustAsHtml(item.label) }
      });
    }

    $scope.$watchGroup(['vmHotCtrl.hotelRating', 'vmHotCtrl.location'], () => {
      DataExchangeService.set('internalFormData',  { hotelRating: vm.hotelRating, location: vm.location, type: vm.type });
    });

    $scope.$on('clear', () => {
      vm.hotelRating = null;
      vm.location = null;
    });


  }]);