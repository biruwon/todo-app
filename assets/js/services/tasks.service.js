/**
 * Created by arodriguez on 3/2/15.
 */

(function() {
    'use strict';

    angular.module('todo').service('$taskService', [function() {
        return {
            getTasks: function () {
                return [
                    {
                        id: 1,
                        issueNumber: 'TSP-200',
                        memberId: 1,
                        description: 'Resolve that motherfucker',
                        path: 'assets/js/services/tasks.service.js line 200'
                    },
                    {
                        id: 2,
                        issueNumber: 'TSP-201',
                        memberId: 4,
                        description: 'Fix something',
                        path: 'assets/js/services/tasks.service.js line 500'
                    }
                ]
            }
        }
    }])
})();
