const mongoose = require('mongoose')
const Company = new mongoose.Schema({
	full_name:           {type: String, required: [true, 'full_name is required'], lowercase: true},
	short_name:          String,
	email:               [String, 'company eail is required'],
	password:            {type: String, required: [true, 'password is required']},
	bio:                 { type: String, minlength: 50, required: [true, 'company bio is required'] },
	is_verified:         { type: Boolean, default: false },
	number_of_employees: { type: Number, min: 0, default: 0 },
	votes:               [{ type: mongoose.Types.ObjectId, ref: 'Votes' }],
	job_postings:        [{type: mongoose.Types.ObjectId, ref: 'Jobs'}],
	social_handles:      {
		twitter:  String,
		facebook: String,
		linkedin: String
	}
})

module.exports = mongoose.model('Company', Company, 'company')