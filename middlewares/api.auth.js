const jwt = require('jsonwebtoken')
const response = require('../util/response')
const CustomError = require('../util/custom-error')

class Authenticator {
	validateUser(req, res, next) {
		return true
  }

	checkPermissions(req, res, next) {
    return true
  }

  signToken(payload) {
    return payload
  }

  verifyToken(token) {
    return token
  }
}

module.exports = new Authenticator()