const mongoose = require('mongoose')
const Votes = new mongoose.Schema({
	company:    { type: mongoose.Types.ObjectId, ref: 'Companies' },
	down_votes: [{type: mongoose.Types.ObjectId, ref: 'Candidates'}],
	up:         [{type: mongoose.Types.ObjectId, ref: 'Candidates'}]
})
module.exports = mongoose.model('Votes', Votes, 'votes')