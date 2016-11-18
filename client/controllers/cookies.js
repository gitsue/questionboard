app.controller('cookieController', function($scope, $cookies, $location){
	// var curr_user = $cookies.get('curr_user');
	$scope.curr_user = $cookies.get('curr_user');
	if($scope.curr_user){
		$scope.isUserLoggedIn = true;
		$location.url('/msgboard');
	}	
	else {
		$scope.isUserLoggedIn = false;
		$location.url('/index');
	}

	$scope.logout = function(){
		$cookies.remove('curr_user');
		$scope.isUserLoggedIn = false;
		$location.url('/index');
	}
});