var mongoose = require('mongoose');
var User = mongoose.model('User');
var Question = mongoose.model('Question');

module.exports = (function(){
	return {
		index: function(req, res){
			Question.find({}, function(error, result){
				res.json(result);
			});
		},
		add: function(req, res){
			User.findOne({name: req.body.user}, function(error, user){
				if(user){
					var newQ = new Question({question: req.body.question, descr: req.body.descr, _user: user._id});
					newQ.save(function(error, result){
						if(error){
							res.json('something went wrong');
						}
						else {
							user._question.push(result._id);
							user.save();
							res.json(result);
						}
					});
				}
			});
		},
		show: function(req, res){
			Question.findOne({_id: req.params.id}).populate({path: '_answer', populate:{path:'_user', model:'User'} }).exec(function(error, result){
				if(!error){
					res.json(result);
				}
			});
		},


	}
})();