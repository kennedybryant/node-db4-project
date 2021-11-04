const express = require('express')
const helpers = require('./model')

const router = express.Router()

router.use('*', (req, res) => { 
    res.json({ api: 'up' })
})

router.use((err, req, res, next) => { //eslint-disable-line
    res.status(500).json({
        customMessage: "Router failed",
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router