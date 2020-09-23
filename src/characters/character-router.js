const express = require('express')
const CharacterService = require('./character-service')

characterRouter = express.Router()

characterRouter
    .route('/')
    .get((req, res, next) => {
        const knexInstance = req.app.get('db')
        CharacterService.getAllCharacters(knexInstance)
        .then(characters => {
            res.json(characters)
        })
        .catch(next)
    })