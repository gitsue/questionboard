var user = require('./../controllers/users.js');
var question = require('./../controllers/questions.js');
var answer = require('./../controllers/answers.js');

module.exports = function(app){
	app.post('/users', function(req, res){
		user.add(req, res);
	});

	app.get('/questions', function(req, res){
		question.index(req, res);
	});
	app.get('/questions/:id', function(req, res){
		question.show(req, res);
	});
	app.post('/questions', function(req, res){
		question.add(req, res);
	});

	app.post('/answers', function(req, res){
		answer.add(req, res);
	});
	app.post('/answers/:id', function(req, res){
		answer.addLike(req, res);
	});
};