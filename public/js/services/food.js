angular.module('foodService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Foods', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/food');
			},
			create : function(todoData) {
				return $http.post('/api/food', todoData);
			},
			delete : function(id) {
				return $http.delete('/api/food/' + id);
			},
            
            total : function(){
            return $http.get('/api/total');
            }
		}
	}])

	.factory('Menu', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/menu');
			}
		}
	}]);

