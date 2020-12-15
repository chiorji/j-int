class CustomError extends Error {
	constructor (message, code) {
		super(message)
		this.name = this.constructor.name
		this.status = code || 404
	}
}

module.exports = CustomError