angular.module('foodController', [])

	// inject the Todo service factory into our controller
	.controller('mainController', ['$scope','$http','Foods','Menu', function($scope, $http, Foods, Menu) {
		$scope.orderData = {};
		$scope.loading = true;
        $scope.totalAmount ={}; 
       /* $scope.menuItems={};*/
		// GET =====================================================================
		// when landing on the page, get all orders and show them
		// use the service to get all the orders
		Foods.get()
			.success(function(data) {
				$scope.orders = data;
                 
				$scope.loading = false;
                $scope.getTotal();
			});
         
    	
	/*	$scope.createOrder = function() {

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
		};*/
        
        $scope.getTotal=function(){
                Foods.total()
			.success(function(data) {
				 $scope.totalAmount=data;
                 
                
			});
            }

		// DELETE ==================================================================
		// delete a order after checking it
		$scope.deleteOrder = function(id) {
			$scope.loading = true;

			Foods.delete(id)
				// if successful creation, call our get function to get all the new orders
				.success(function(data) {
					$scope.loading = false;
					$scope.orders = data; // assign our new list of orders
                    $scope.getTotal();
				});
		};
        $scope.menuItems={};
     $scope.range=[];
   
    for(var i=1;i<=10;i++){
        $scope.range.push(i);
    }
    
    	Menu.get()
			.success(function(data) {
				$scope.menuItems = data;
                
				/*$scope.loading = false;
                $scope.getTotal();*/
			});
    
    
    	$scope.createOrder = function() {
           
			// validate the orderData to make sure that something is there
			// if form is empty, nothing will happen
            
            var foodDetail=$scope.orderData.foodName.split(',');
               $scope.orderData.foodName=foodDetail[0];
             $scope.orderData.price=Number(foodDetail[1]);
               $scope.orderData.total= $scope.orderData.price * $scope.orderData.quantity;
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
        
	}]);
/*.controller('menuController', ['$scope','$http','Menu','Foods', function($scope,$http,Menu,Foods) {
     $scope.menuItems={};
     $scope.range=[];
     $scope.orderData = {};
    for(var i=1;i<=10;i++){
        $scope.range.push(i);
    }
    
    	Menu.get()
			.success(function(data) {
				$scope.menuItems = data;
                
				$scope.loading = false;
                $scope.getTotal();
			});
    
    
    	$scope.createOrder = function() {
           
			// validate the orderData to make sure that something is there
			// if form is empty, nothing will happen
            
            var foodDetail=$scope.orderData.foodName.split(',');
               $scope.orderData.foodName=foodDetail[0];
             $scope.orderData.price=Number(foodDetail[1]);
         if ($scope.orderData.foodName != undefined && $scope.orderData.price != undefined) {
				$scope.loading = true;
            
               console.log($scope.orderData);
				// call the create function from our service (returns a promise object)
                
				Foods.create($scope.orderData)

					// if successful creation, call our get function to get all the new orders
					.success(function(data) {
						$scope.loading = false;
						$scope.orderData = {}; // clear the form so our user is ready to enter another
                       
//						$scope.orders = data; // assign our new list of orders
//                        $scope.getTotal();
					});
            }
		};
    
    }]);*/