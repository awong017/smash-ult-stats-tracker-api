const express = require('express')
const nodemailer = require('nodemailer')

const bodyParser = express.json()
const emailRouter = express.Router()

emailRouter
    .route('/')
    .post(bodyParser, (req, res, next) => {
        const { email, username, password } = req.body
        const userInfo = { email, username, password }

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'adamwthedev@gmail.com',
                pass: 'Aw0nG017!'
            }
        })

        const text = `Your login info is as follows: 
            user: ${userInfo.username},
            password: ${userInfo.password}`

        const mailOptions = {
            from: 'adamwthedev@gmail.com',
            to: userInfo.email,
            subject: 'Login Info',
            text: text
        }

        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.log(error)
                res.json({yo: 'error'})
            }
            else {
                console.log('Message sent: ' + info.response);
                res.json({yo: info.response});
            }
        })
    })

module.exports = emailRouter