angular.module('sharedModule').factory('HotelsService', function () {
    let HotelsService = Object.create(null);
    let mockData = [
        { label: '&#9733; and higher', value: '&#9733;' },
        { label: '&#9733; &#9733; and higher', value: '&#9733; &#9733;' },
        { label: '&#9733; &#9733; &#9733; and higher', value: '&#9733; &#9733; &#9733;' },
        { label: '&#9733; &#9733; &#9733; &#9733; and higher', value: '&#9733; &#9733; &#9733; &#9733;' },
        { label: '&#9733; &#9733; &#9733; &#9733; &#9733; and higher', value: '&#9733; &#9733; &#9733; &#9733; &#9733;' }
    ]
    
    HotelsService.getRatingsList = function () {
        return mockData;
    }

    return HotelsService;
});