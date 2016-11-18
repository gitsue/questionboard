var mongoose = require('mongoose');
var User = mongoose.model('User');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');

module.exports = (function(){
	return {
		add: function(req, res){
			User.findOne({name: req.body.user}, function(err, result){
				if(!err){
					var answer = new Answer({answer: req.body.answer, detail: req.body.detail, _question: req.body.question, _user: result._id});
					answer.save(function(err, answer){
						if(!err){
							Question.findOne({_id: req.body.question}, function(err, question){
								question.answer_count++ ;
								question._answer.push(answer._id);
								question.save();
								res.json('success!');
							});
						}
						else {
							console.log(err);
						}
					});
				}
				else {
					res.json('something went wrong');
				}
			});
		},
		addLike: function(req, res){
			Answer.findOne({_id: req.params.id}, function(error, answer){
				if(!error){
					answer.like++;
					answer.save();
					res.json('added like!');
				}
			});
			Question.findOne({_id: req.body._id}).populate('_answer').exec(function(error, question){
				if(!error){
					question._answer.like++;
					question.save();
				}
			});
		},

	}
})();