angular.module('sharedModule').service('NavigationService', function () {
    let mockData = [
        { label: 'flights', icon: 'fa fa-plane' },
        { label: 'cars', icon: 'fa fa-car' },
        { label: 'hotels', icon: 'fa fa-hotel' }];
    
    this.getNavigationsList = () => {
        return mockData;
    }
});