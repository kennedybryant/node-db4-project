const express = require('express')
const router = express.Router()
const Recipe = require('./model')

router.get('/:recipe_id', (req, res, next) => {
    Recipe.getRecipeById(req.params.recipe_id)
        .then(recipe => {
            res.status(200).json(recipe)
        })
        .catch(next)
})

router.use((err, req, res, next) => { //eslint-disable-line
    res.status(500).json({
        customMessage: "Router failed",
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router