const response = require('../util/response')

class AppController {
	async getApps(req, res) {
		res.status(200).json(response(200, 'job retrieved', null, true))
	}

	async trackApp(req, res) {
		res.status(200).json(response(200, 'retrieved all jobs', null, true))
	}

	async revokeApp(req, res) {
		res.status(200).json(response(200, 'job deleted', null, true))
	}
}

module.exports = new AppController()