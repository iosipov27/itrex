angular.
    module('bookingApp').
    config(['$routeProvider',
        function config($routeProvider) {
            $routeProvider.
                when('/flights', {
                    templateUrl: 'components/flights/flights.view.html',
                    controller: 'FlightsCtrl'
                }).
                when('/cars', {
                    templateUrl: 'components/cars/cars.view.html',
                    controller: 'CarsCtrl'
                }).
                when('/hotels', {
                    templateUrl: 'components/hotels/hotels.view.html',
                    controller: 'HotelsCtrl'
                }).
                otherwise({
                    redirectTo: '/flights'
                });
        }
    ]);