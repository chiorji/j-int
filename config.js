module.exports = (arg) => {
	const environs = {
		dev: {
			envName: 'dev',
			port:    3000,
			db_uri:  process.env.DEV_DB_URI
		},

		production: {
			envName: 'production',
			port:    process.env.PORT || 8080,
			db_uri:  process.env.PROD_DB_URI
		},

		test: {
			envName: 'test',
			port:    4000,
			db_uri:  process.env.TEST_DB_URI
		}
	}

	// Throw error if initializing directly with a none string value
	if (typeof (arg) === 'string') {
		arg = arg.trim()
	} else {
		throw new Error(`Argument to process.env.NODE_ENV must be a string, received --> ${arg}`)
	}

	if ((typeof (environs[arg]) === 'undefined')) {
		return environs.dev
	}
	return environs[arg]
}