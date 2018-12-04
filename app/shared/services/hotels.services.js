angular.module('sharedModule').service('HotelsService', function () {
    let mockData = [
        { label: '&#9733; and higher', value: '&#9733;' },
        { label: '&#9733; &#9733; and higher', value: '&#9733; &#9733;' },
        { label: '&#9733; &#9733; &#9733; and higher', value: '&#9733; &#9733; &#9733;' },
        { label: '&#9733; &#9733; &#9733; &#9733; and higher', value: '&#9733; &#9733; &#9733; &#9733;' },
        { label: '&#9733; &#9733; &#9733; &#9733; &#9733; and higher', value: '&#9733; &#9733; &#9733; &#9733; &#9733;' }
    ]
    
    this.getRatingsList = () => {
        return mockData;
    }
});