/**
 * Created by arodriguez on 3/2/15.
 */

(function() {
    'use strict';

    angular.module('todo', [
        'ui.router',
        'ngResource'
    ])
    .config(['$stateProvider', function($stateProvider){
        $stateProvider.state('dashboard', {
            url: '/',
            templateUrl: 'assets/templates/timeline.html',
            controller: 'Dashboard'
        });
    }])
})();