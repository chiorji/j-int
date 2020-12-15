const mongoose = require('mongoose')
const Jobs = new mongoose.Schema({
	tags:         [String],
	is_open:      {type: Boolean, default: true},
	title:        [String, 'job title is required'],
	description:  [String, 'job description is required'],
	requisites:   [String, ' should set job requisites'],
	skills:       [{ type: mongoose.Types.ObjectId, ref: 'Skills' }],
	applications: [{type: mongoose.Types.ObjectId, ref: 'Apps'}],
	company:      {type: mongoose.Types.ObjectId, ref: 'Company'}
})

module.exports = mongoose.model('Jobs', Jobs, 'jobs')