angular.module('foodController', [])

	// inject the Todo service factory into our controller
	.controller('mainController', ['$scope','$http','Foods', function($scope, $http, Foods) {
		$scope.orderData = {};
		$scope.loading = true;
        $scope.totalAmount ={}; 
		// GET =====================================================================
		// when landing on the page, get all orders and show them
		// use the service to get all the orders
		Foods.get()
			.success(function(data) {
				$scope.orders = data;
                 
				$scope.loading = false;
                $scope.getTotal();
			});
        

		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.createOrder = function() {

			// validate the orderData to make sure that something is there
			// if form is empty, nothing will happen
			if ($scope.orderData.foodName != undefined && $scope.orderData.price != undefined) {
				$scope.loading = true;
               console.log($scope.orderData);
				// call the create function from our service (returns a promise object)
				Foods.create($scope.orderData)

					// if successful creation, call our get function to get all the new orders
					.success(function(data) {
						$scope.loading = false;
						$scope.orderData = {}; // clear the form so our user is ready to enter another
						$scope.orders = data; // assign our new list of orders
                        $scope.getTotal();
					});
            }
		};
        	$scope.getTotal=function(){
                Foods.total()
			.success(function(data) {
				 $scope.totalAmount=data;
                 
                
			});
            }

		// DELETE ==================================================================
		// delete a todo after checking it
		$scope.deleteTodo = function(id) {
			$scope.loading = true;

			Foods.delete(id)
				// if successful creation, call our get function to get all the new orders
				.success(function(data) {
					$scope.loading = false;
					$scope.orders = data; // assign our new list of orders
                    $scope.getTotal();
				});
		};
	}]);