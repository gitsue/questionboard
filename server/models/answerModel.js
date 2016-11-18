var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnswerSchema = mongoose.Schema({
	answer: {type: String, minlength: [5, 'Needs to be greater than 5 characters!']},
	detail: {type: String},
	_question: {type: Schema.Types.ObjectId, ref: 'Question'},
	_user: {type: Schema.Types.ObjectId, ref: 'User'},
	like: {type: Number, default: 0}	
});

mongoose.model('Answer', AnswerSchema);