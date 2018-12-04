angular.module('sharedModule').factory('CarsService', function () {
    let CarsService = Object.create(null);
    let mockData = [
        { label: 'Economy', value: 'Economy' },
        { label: 'Buisness', value: 'Buisness' },
        { label: 'Economy', value: 'Economy' }
    ]
    
    CarsService.getCarsTypes = () => {
        return mockData;
    }

    return CarsService;
});