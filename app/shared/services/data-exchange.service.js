angular.module('sharedModule').factory('DataExchangeService', function () {
    let DataExchangeService = Object.create(null);
    DataExchangeService._data = Object.create(null);
    
    DataExchangeService.set = function (fieldName, data) {
        this._data[fieldName] = data;
    }

    DataExchangeService.get = function (fieldName) {
        return this._data[fieldName];
    }

    DataExchangeService.clear = function () {
        this._data = {};
    }

    return DataExchangeService;
});