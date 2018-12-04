angular.module('sharedModule').service('LogService', function () {

    function getStoredData() {
        return JSON.parse(localStorage.getItem("storedData")) || [];
    }

    function saveData(data) {
        localStorage.setItem('storedData', JSON.stringify(data));
    }

    this.push = (dataItem) => {
        let storedData = getStoredData();

        storedData.push(dataItem);
        saveData(storedData);
    };

    this.removeByIndex = (ind) => {
        let storedData = getStoredData();

        storedData.splice(ind, 1);
        saveData(storedData);
    };

    this.get = getStoredData;

    this.clear = () => {
        localStorage.clear();
    };
});