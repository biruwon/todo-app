/**
 * Created by arodriguez on 3/3/15.
 */

(function() {
    'use strict';

    angular.module('todo').provider('keyCode', [function() {

        function resolve(keyCode) {

            var result = false;

            if (keyCode == 50) {
                result = '@';
            }
            else if (keyCode == 219)
            {
                result = '['
            }

            return result;
        }

        return {
            $get: function() {
                return {
                    resolve: resolve
                }
            }
        }
    }])
})();