const mongoose = require('mongoose')
const Skills = new mongoose.Schema({
	name:  [String, 'name is required'],
	level: {type: String, enum: ['junior','intermediate', 'any'], default: 'any'}
})
module.exports = mongoose.model('Skills',Skills,'skills')