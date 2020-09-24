const express = require('express')
const xss = require('xss')
const UserService = require('./userService')

const bodyParser = express.json()

serializeUser = (user) => ({
    email: xss(user.email),
    username: xss(user.username),
    password: xss(user.password) 
})

userRouter = express.Router()

userRouter
    .route('/')
    .get((req, res, next) => {
        const knexInstance = req.app.get('db')
        UserService.getAllUsers(knexInstance)
        .then(users => {
            res.json(users)
        })
        .catch(next)
    })
    .post(bodyParser, (req, res, next) => {
        const {email, username, password} = req.body
        const newUser = {email, username, password}

        for (const [key, value] of Object.entries(newUser)) {
            if (value == null) {
                return res.status(400).json({
                    error: {message: `Missing ${key} in request body`}
                })
            }
        }

        const knexInstance = req.app.get('db')

        UserService.insertUser(knexInstance, newUser)
            .then(user => {
                res
                    .status(200)
                    .json(serializeUser(user))
            })
            .catch(next)
    })

module.exports = userRouter




