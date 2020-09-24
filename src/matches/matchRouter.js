const express = require('express')
const MatchService = require('./matchService')

const bodyParser = express.json()

matchRouter = express.Router()

matchRouter
    .route('/')
    .get((req, res, next) => {
        const knexInstance = req.app.get('db')
        MatchService.getAllMatches(knexInstance)
        .then(matches => {
            res.json(matches)
        })
        .catch(next)
    })
    .post(bodyParser, (req, res, next) => {
        const { date, user_id, player, opponent, outcome } = req.body
        const newMatch = { date, user_id, player, opponent, outcome }

        for (const [key, value] of Object.entries(newMatch)) {
            if (value == null) {
                return res.status(400).json({
                    error: {message: `Missing ${key} in request body`}
                })
            }
        }

        const knexInstance = req.app.get('db')

        MatchService.insertMatch(knexInstance, newMatch)
            .then(match => {
                res
                    .status(200)
                    .json(match)
            })
            .catch(next)
    })

matchRouter
    .route('/:match_id')
    .delete((req, res, next) => {
        const { match_id } = req.params
        if (!match_id) {
            return res
                .status(400)
                .json({"error": "Please specify a match id to delete"})
        }
        MatchService.deleteMatch(
            req.app.get('db'),
            match_id
        )
        .then(
            res
                .status(200)
                .send('Deleted')
        )
        .catch(next)
    })

module.exports = matchRouter
