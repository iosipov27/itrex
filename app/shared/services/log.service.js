angular.module('sharedModule').factory('LogService', function () {
    let LogService = Object.create(null);

    function getStoredData() {
        return JSON.parse(localStorage.getItem("storedData")) || [];
    }

    function saveData(data) {
        localStorage.setItem('storedData', JSON.stringify(data));
    }

    LogService.push = function (dataItem) {
        let storedData = getStoredData();

        storedData.push(dataItem);
        saveData(storedData);
    };

    LogService.removeByIndex = function (ind) {
        let storedData = getStoredData();

        storedData.splice(ind, 1);
        saveData(storedData);
    };

    LogService.get = getStoredData;

    LogService.clear = function () {
        localStorage.clear();
    };

    return LogService;
});