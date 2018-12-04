angular.module('bookingApp').controller('AppCtrl',
    ['$scope', 'DataExchangeService', 'LogService', '$sce', 'NavigationService',
        function ($scope, DataExchangeService, LogService, $sce, NavigationService) {

            let activePanel;
            let logs;

            init.call(this);
            function init() {
                initLogs();
            };

            this.search = (isValid) => {
                if (!isValid) return;

                $scope.$broadcast('search');

                let formData = angular.extend(
                    DataExchangeService.get('internalFormData'),
                    { startDate: this.startDate, endDate: this.endDate }
                );
                LogService.push(formData);
                this.clear();
                initLogs();
            };

            $scope.$on('$routeChangeSuccess', function (event, current, previous, reject) {
                activePanel = current.$$route.originalPath.replace(/\//, "");
            })

            this.clear = () => {
                this.startDate = null;
                this.endDate = null;
                $scope.$broadcast('clear');
            };

            this.removeLogByIndex = (ind) => {
                LogService.removeByIndex(ind);
                initLogs();
            };

            this.getNavList = () => {
                return NavigationService.getNavigationsList();;
            };

            this.getLogs = () => {
                return logs;
            };

            this.isPanelActive = (panelName) => {
                return activePanel === panelName;
            };

            function initLogs() {
                logs = LogService.get().map((item) => {
                    switch (item.type) {
                        case 'hotels':
                            item.icon = 'fa fa-hotel';
                            item.description = $sce.trustAsHtml(item.hotelRating + ' - ' + item.location);
                            break;
                        case 'cars':
                            item.icon = 'fa fa-car'
                            item.description = item.carType + ' - ' + item.location;
                            break;
                        case 'flights':
                            item.icon = 'fa fa-plane';
                            item.description = item.fromDate + ' - ' + item.toDate;
                            break;
                    }
                    return item;
                });
            }

        }]);