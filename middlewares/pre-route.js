const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

module.exports = (app) => {
	app.use(express.json())
	app.use(express.urlencoded({extended: false}))
	app.use(cors())
	app.options('*', cors())
	app.use(morgan('dev'))

	return app
}