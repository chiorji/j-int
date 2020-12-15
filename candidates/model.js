const mongoose = require('mongoose')
const Candidates = new mongoose.Schema({
	first_name:     {type: String, required: [true, 'first_name is required'], lowercase: true},
	last_name:      {type: String, required: [true, 'last_name is required'], lowercase: true},
	email:          [String, 'company eail is required'],
	password:       {type: String, required: [true, 'password is required']},
	bio:            { type: String, minlength: 50, required: [true, 'company bio is required'] },
	phone:          String,
	img_url:        String,
	is_verified:    { type: Boolean, default: false },
	votes:          [{ type: mongoose.Types.ObjectId, ref: 'Votes' }],
	applications:   [{ type: mongoose.Types.ObjectId, ref: 'Apps' }],
	skills:         [{ type: mongoose.Types.ObjectId, ref: 'Skills' }],
	status:         { type: String, enum: ['ready to work', 'not open', 'open but not ready'], default: 'ready to work' },
	roles:          {type: String, enum: ['user', 'admin', 'superuser'], default: 'user'},
	social_handles: {
		twitter:  String,
		facebook: String,
		linkedin: String
	}
})

module.exports = mongoose.model('Candidates', Candidates, 'candidates')