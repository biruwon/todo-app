/**
 * Created by arodriguez on 3/2/15.
 */

(function() {
    'use strict';

    angular.module('todo').directive('tasks', [function(){
        return {
            restrict: 'E',
            templateUrl: 'assets/js/directives/tasks.html'
        }
    }]);
})();
