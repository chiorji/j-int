const router = require('express').Router()

router.use('/apps', require('../jobs/route'))
router.use('/users', require('../candidates/route'))
router.use('/companies', require('../company/route'))
router.use('/jobs', require('../jobs/route'))

module.exports = router