const response = require('../util/response')
module.exports = (app) => {
  app.use((err, req, res, next) => {
    if (err.name === 'CustomError') {
      return res.status(err.status).json(response(404, err.message, null, false))
    }
  })
}