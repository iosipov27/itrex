angular.
    module('bookingApp').
    config(['$routeProvider',
        function config($routeProvider) {
            $routeProvider.
                when('/flights', {
                    templateUrl: 'components/flights/flights.view.html',
                    controller: 'FlightsCtrl as flights'
                }).
                when('/cars', {
                    templateUrl: 'components/cars/cars.view.html',
                    controller: 'CarsCtrl as cars'
                }).
                when('/hotels', {
                    templateUrl: 'components/hotels/hotels.view.html',
                    controller: 'HotelsCtrl as hotels'
                }).
                otherwise({
                    redirectTo: '/flights'
                });
        }
    ]);