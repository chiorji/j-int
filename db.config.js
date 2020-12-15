module.exports = (mongoose, config) => {
	mongoose.connect(config.db_uri, {
		useCreateIndex:     true,
		useNewUrlParser:    true,
		useUnifiedTopology: true
	})

	mongoose.connection.once('connected', () => {
		console.log(`>>>>> ${config.envName} database connected`)
	})

	mongoose.connection.on('error', (err) => {
		console.log('>>>\n' + config.envName + ' database error ' + err + '\n>>>')
		process.exit(1)
	})

	global.Promise = mongoose.Promise
}