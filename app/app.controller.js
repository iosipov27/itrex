angular.module('bookingApp').controller('AppCtrl',
    ['$scope', 'DataExchangeService', 'LogService', '$sce',
        function ($scope, DataExchangeService, LogService, $sce) {

            let activePanel = 'flights';
            let logs = [];
            let navList = [
                { label: 'flights', icon: 'fa fa-plane' },
                { label: 'cars', icon: 'fa fa-car' },
                { label: 'hotels', icon: 'fa fa-hotel' }];

            init();
            function init() {
                initLogs();
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

            this.search = function (isValid) {
                if (!isValid) return;

                $scope.$broadcast('search');

                let formData = angular.extend(DataExchangeService.get('internalFormData'), { startDate: this.startDate, endDate: this.endDate });
                LogService.push(formData);
                this.clear();
                init();
            };

            this.clear = function () {
                this.startDate = null;
                this.endDate = null;
                $scope.$broadcast('clear');
            };

            this.removeLogByIndex = function (ind) {
                LogService.removeByIndex(ind);
                init();
            };

            this.getNavList = function () {
                return navList;
            };

            this.getLogs = function () {
                return logs;
            };

            this.isPanelActive = function (panelName) {
                return activePanel === panelName;
            };

            this.setActivePanel = function (panelName) {
                activePanel = panelName;
            };

        }]);