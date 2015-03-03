/**
 * Created by arodriguez on 3/2/15.
 */

(function() {
    'use strict';

    angular.module('todo').controller('Dashboard', ['$scope', '$taskService',
        function($scope, $taskService) {
            $scope.tasks = $taskService.getTasks();
            $scope.todoItem = '';
            $scope.addTodoItem = function() {
                if ($scope.todoItem.length > 0) {
                    $scope.tasks.push({
                        description: $scope.todoItem
                    });
                    $scope.todoItem = '';
                }
            };
            $scope.checkSpelling = function($event) {
                if ($event.keyCode == 50) {
                    $scope.todoItem = $scope.todoItem + 'berni'
                }
            }

        }]
    );
})();
