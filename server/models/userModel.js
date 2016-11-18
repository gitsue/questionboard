var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = mongoose.Schema({
	name: String,
	_question: [{type: Schema.Types.ObjectId, ref:'Question'}],
	_answer: [{type: Schema.Types.ObjectId, ref: 'Answer'}]
});

mongoose.model('User', UserSchema);