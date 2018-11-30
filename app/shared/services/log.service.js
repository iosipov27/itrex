angular.module('sharedModule').factory('LogService', function () {
    let LogService = Object.create(null);
    
    LogService.set = function (fieldName, data) {
        localStorage.setItem(fieldName, JSON.stringify(data));
    }

    LogService.push = function (dataItem) {
        let storedData = JSON.parse(localStorage.getItem("storedData")) || [];
        storedData.push(dataItem);
        localStorage.setItem('storedData', JSON.stringify(storedData));
    }

    LogService.removeByIndex = function (ind) {
        let storedData = JSON.parse(localStorage.getItem("storedData")) || [];
        storedData.splice(ind, 1);
        localStorage.setItem('storedData', JSON.stringify(storedData));
    }

    LogService.get = function () {
        return JSON.parse(localStorage.getItem("storedData")) || [];
    }

    LogService.clear = function () {
        localStorage.clear();
    }

    return LogService;
});