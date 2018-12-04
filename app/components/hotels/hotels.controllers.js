angular.module('bookingComponentsModule').controller('HotelsCtrl', ['$scope', 'HotelsService', '$sce', 'DataExchangeService',
  function ($scope, HotelsService, $sce, DataExchangeService) {

    init.call(this);
    function init() {
      this.type = 'hotels';
      this.ratings = HotelsService.getRatingsList().map((item) => {
        return { value: item.value, label: $sce.trustAsHtml(item.label) }
      });
    }

    $scope.$on('search', () => {
      DataExchangeService.set('internalFormData', { hotelRating: this.hotelRating, location: this.location, type: this.type });
    });

    $scope.$on('clear', () => {
      this.hotelRating = null;
      this.location = null;
    });

  }]);