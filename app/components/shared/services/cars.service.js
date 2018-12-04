angular.module('bookingComponentsModule').service('CarsService', function () {

    let mockData = [
        { label: 'Economy', value: 'Economy' },
        { label: 'Buisness', value: 'Buisness' },
        { label: 'Economy', value: 'Economy' }
    ];
    
    this.getCarsTypes = () => {
        return mockData;
    };
});