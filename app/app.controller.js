angular.module('bookingApp').controller('AppCtrl',
    ['$scope', 'DataExchangeService', 'LogService', '$sce', 
        function ($scope, DataExchangeService, LogService, $sce) {

            let vm = {};
            let activePanel;
            $scope.vm = vm;

            init();
            function init() {
                vm.logs = LogService.get().map((item) => {
                    if (item.type === 'hotels') {
                        item.hotelRating = $sce.trustAsHtml(item.hotelRating);
                    }
                    return item;
                });
                activePanel = 'flights';
            }

            this.search = function () {
                let formData = angular.extend(DataExchangeService.get('internalFormData'), { startDate: vm.startDate, endDate: vm.endDate });
                LogService.push(formData);
                init();
            }

            this.clear = function () {
                vm.startDate = null;
                vm.endDate = null;
                $scope.$broadcast('clear');
            }

            this.removeLogByIndex = function (ind) {
                LogService.removeByIndex(ind);
                init();
            }

            this.isPanelActive = function (panelName) {
                return activePanel === panelName;
            }

            this.setActivePanel = function (panelName) {
                activePanel = panelName;
            }

        }]);