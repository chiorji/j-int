const mongoose = require('mongoose')
const Applications = new mongoose.Schema({
	company:    { type: mongoose.Types.ObjectId, ref: 'Companies' },
	job:        { type: mongoose.Types.ObjectId, ref: 'Jobs' },
	candidates: { type: mongoose.Types.ObjectId, ref: 'Candidates' },
	is_open:    {type: Boolean, default: true}
})

module.exports = mongoose.model('Applications', Applications, 'applications')