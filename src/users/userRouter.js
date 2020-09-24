const express = require('express')
const xss = require('xss')
const UserService = require('./userService')

const userRouter = express.Router()
const bodyParser = express.json()