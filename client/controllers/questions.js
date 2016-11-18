app.controller('questionController', function($scope, $cookies, questionFactory, $routeParams, $location){
	$scope.qboard = [];

	questionFactory.index(function(returned_data){
		$scope.qboard = returned_data;
	});

	$scope.addQuestion = function(){
		questionFactory.addQuestion($scope.curr_user, $scope.newQuestion, function(returned_data){
			if(returned_data ==200){
				$location.url('/msgboard');
			}
			else {
				$scope.errormsg = "Something went wrong.";
			}
		});
	};

	if($routeParams.id){
		$scope.like_count;
		questionFactory.showOne($routeParams.id, function(returned_data){
			$scope.showQ = returned_data;
			$scope.like_count = returned_data._answer.like;
		});

		$scope.addAnswer = function(q_id){
			questionFactory.addAnswer(q_id, $scope.newAnswer, $scope.curr_user, function(returned_data){
				if(returned_data ==200){
					$location.url('/msgboard');
				}
				else {
					$scope.errormsg = "something went wrong!";
				}
			});	
		};

		$scope.addLike = function(a_id, q_id){			
			questionFactory.addLike(a_id, q_id);
		};
	};
});