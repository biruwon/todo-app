/**
 * Created by arodriguez on 3/3/15.
 */

(function () {
    'use strict';

    angular.module('todo').directive('todoInput', [
            'keyCode', '$dataUser', '$dataTask',
            function(keyCodeProvider, $dataUser, $dataTask) {
                return {
                    restrict: 'E',
                    templateUrl: 'assets/js/directives/todo-input.html',
                    link: function(scope, elem, attr) {
                        scope.checkSpelling = function($event) {
                            var resolve = keyCodeProvider.resolve($event.keyCode);
                            var result = {};
                            if (resolve == '@')
                            {
                                result = $dataUser.users();

                                var test;
                            }
                            else if (resolve == '[')
                            {
                                result = $dataTask.tasks();
                            }
                            return result;
                        }
                    }
                }
            }
        ])
})();
