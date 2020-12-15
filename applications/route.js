const router = require('express').Router()
const ctr = require('./controller')

// Get all applications
router.get('/', ctr.getApps)

// Track an application status
router.get('/:app_id', ctr.trackApp)

// Revoke an application
router.delete('/:app_id', ctr.revokeApp)

module.exports = router