var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = mongoose.Schema({
	question: {type: String, minlength:[10,'Question length is too short!']},
	descr: {type: String},
	answer_count: {type: Number, default: 0},
	_answer: [{type: Schema.Types.ObjectId, ref: 'Answer'}],
	_user: {type: Schema.Types.ObjectId, ref: 'User'}
});

mongoose.model('Question', QuestionSchema);