/**
 * Created by arodriguez on 3/3/15.
 */

(function() {
    'use strict';

    angular.module('todo').service('$dataTask', ['$resource', function($resource) {

        function findTasks()
        {
            var tasks = $resource('/assets/data/tasks.json').get(function() {
                return tasks;
            });
        }

        return {
            tasks: findTasks
        }
    }])
})();
