app.controller('usersController', function($scope, userFactory, $cookies, $location){
	$scope.user = [];

	$scope.addUser = function(){
		$location.url('/msgboard');
		userFactory.addUser($scope.newUser, function(returned_data){
			if(returned_data){
				$cookies.put('curr_user', returned_data);
			}
		});
	};
});