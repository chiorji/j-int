const mongoose = require('mongoose')
const Applications = new mongoose.Schema({
	company:    { type: mongoose.Types.ObjectId, ref: 'Companies' },
	job:        { type: mongoose.Types.ObjectId, ref: 'Jobs' },
	candidates: { type: mongoose.Types.ObjectId, ref: 'Candidates' }
})

module.exports = mongoose.model('Apps', Applications, 'apps')