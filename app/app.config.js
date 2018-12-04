angular.
    module('bookingApp').
    config(['$routeProvider',
        function config($routeProvider) {
            $routeProvider.
                when('/flights', {
                    templateUrl: './flights/flights.view.html',
                    controller: 'FlightsCtrl as flights'
                }).
                when('/cars', {
                    templateUrl: './cars/cars.view.html',
                    controller: 'CarsCtrl as cars'
                }).
                when('/hotels', {
                    templateUrl: './hotels/hotels.view.html',
                    controller: 'HotelsCtrl as hotels'
                }).
                otherwise({
                    redirectTo: '/flights'
                });
        }
    ]);