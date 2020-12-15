const response = require('../util/response')
module.exports = (app) => {
	const possibleErrorsNames = ['CastError', 'JsonWebTokenError', 'ValidationError', 'SyntaxError', 'MongooseError', 'MongoError']

	app.use((req, res, next) => next())

	app.use((err, req, res, next) => { // eslint-disable-line
		if (err.name == 'CustomError') {
			return res.status(error.status).json(response(err.status, err.message, null, false))
		} else if (err.name == 'MongoError' && err.code == 11000) {
			return res.status(400).json(response(400, 'Validation failed, fields already exist', null, false))
		} else if (possibleErrorsNames.indexOf(err.name) > -1) {
			return res.status(400).json(response(400, err.message, null, false))
		} else {
			console.log('5xx Error >>> ', err)
			res.status(500).send(response(500, err.message, null, false))
		}
	})
}