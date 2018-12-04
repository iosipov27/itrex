angular.module('sharedModule').service('DataExchangeService', () => {
    this._data = Object.create(null);

    this.set = (fieldName, data) => {
        this._data[fieldName] = data;
    }

    this.get = (fieldName) => {
        return this._data[fieldName];
    }

    this.clear = () => {
        this._data = {};
    }
});