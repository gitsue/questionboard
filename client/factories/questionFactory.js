app.factory('questionFactory', function($http){
	var factory = {};

	factory.index = function(callback){
		$http.get('/questions').then(function(returned_data){
			callback(returned_data.data);
		});
	};

	factory.addQuestion = function(user, newQuestion, callback){
		if(newQuestion.descr ==""){
			var newQ = {
				question: newQuestion.question,
				descr: "none",
				user: user,
			};	
		}
		else{
			var newQ = {
				question: newQuestion.question,
				descr: newQuestion.descr,
				user: user,
			};
		}
		console.log(newQ);
		$http.post('/questions',newQ).then(function(returned_data){
			callback(returned_data.status);
		});
	};

	factory.showOne = function(q_id, callback){
		$http.get('/questions/' + q_id).then(function(returned_data){
			callback(returned_data.data);
		});
	};

	factory.addAnswer = function(q_id, answer, user, callback){
		if(answer.detail ==""){
			var newA = {
				answer: answer.answer,
				detail: "none",
				question: q_id,
				user: user
			};	
		}	
		else {	
			var newA = {
				answer: answer.answer,
				detail: answer.detail,
				question: q_id,
				user: user
			};
		};

		$http.post('/answers', newA).then(function(returned_data){
			callback(returned_data.status);
		});
	};

	factory.addLike = function(a_id, q_id){
		$http.post('/answers/' + a_id, q_id).then(function(returned_data){
		});
	};

	return factory;
});