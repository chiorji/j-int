const response = require('../util/response')

class Controller {
	async getApplications(req, res) {
		res.status(200).json(response(200, 'job retrieved', null, true))
	}

	async getApplication(req, res) {
		res.status(200).json(response(200, 'retrieved all jobs', null, true))
	}

	async markJobAsClosed(req, res) {
		res.status(201).json(response(201, 'job closed', null, true))
	}

	async deleteJob(req, res) {
		res.status(200).json(response(200, 'job deleted', null, true))
	}

	async updateJob(req, res) {
		res.status(200).json(response(200, 'job updated', null, true))
	}
}

module.exports = new Controller()