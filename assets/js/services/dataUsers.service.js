/**
 * Created by arodriguez on 3/3/15.
 */

(function() {
    'use strict';

    angular.module('todo').service('$dataUser', ['$resource', function($resource) {

        function findUsers()
        {
            var userResource = $resource('assets/data/users.json');

            return userResource.query({isArray: false}, function(value, response) {
                return value[0]
            });
        }

        return {
            users: findUsers
        }
    }])
})();
