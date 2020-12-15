require('dotenv').config()
const config = require('./config')(process.env.NODE_ENV)
const app = require('express')()
const mongoose = require('mongoose')

require('./middlewares/pre-route')(app)
app.use('/ping', (req, res) => res.sendStatus(200))
app.use('/api/v1', require('./routes'))
require('./middlewares/post-route')(app)

if (require.main === module) {
	app.listen(config.port, () => {
		require('./db.config')(mongoose, config)
		console.log('server listening on port ::', config.port)
	})
} else module.exports = app