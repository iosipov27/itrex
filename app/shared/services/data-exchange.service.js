angular.module('sharedModule').service('DataExchangeService', function () {
    this._data = Object.create(null);
    
    this.set = function (fieldName, data) {
        this._data[fieldName] = data;
    }

    this.get = function (fieldName) {
        return this._data[fieldName];
    }

    this.clear = function () {
        this._data = {};
    }
});