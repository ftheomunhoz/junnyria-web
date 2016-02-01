/**
 *
 * @module
 * @author ftheomunhoz
 */

(function () {
    "use strict";

    function config($stateProvider, $urlRouterProvider, authProvider, jwtInterceptorProvider, $httpProvider) {
        $stateProvider
            .state('login', {
                url: "/login",
                templateUrl: "modules/login/views/login.html",
                controller: "loginController as vm"
            });

        $urlRouterProvider.otherwise('/login');

        authProvider.init({
            domain: 'app44880966.auth0.com',
            clientID: 'TnMTRFqgFsjDRpWUi5LE1VHvJ0kqg3yD'
        });

        jwtInterceptorProvider.tokenGetter = ['store', function(store) {
            return store.get('token');
        }];

        $httpProvider.interceptors.push('jwtInterceptor');
    }

    angular.module('junnyria.login').config(config);
})();
