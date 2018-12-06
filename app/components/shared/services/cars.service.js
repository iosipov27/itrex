angular.module('bookingComponentsModule').service('CarsService', function () {

    let mockData = [
        { label: 'Economy', value: 'Economy' },
        { label: 'Comfort', value: 'Comfort' },
        { label: 'Business', value: 'Business' }
    ];
    
    this.getCarsTypes = () => {
        return mockData;
    };
});