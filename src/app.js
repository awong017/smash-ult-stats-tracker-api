require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV } = require('./config')

const app = express()

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption))
app.use(helmet())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello, world!')
})

app.get('/characters', (req, res) => {
  const characters = [
    {id:1,name:"Mario",img:"mario.jpg"},
    {id:2,name:"Donkey Kong",img:"donkey-kong.jpg"},
    {id:3,name:"Link",img:"link.jpg"},
    {id:4,name:"Samus",img:"samus.jpg"},
    {id:5,name:"Dark Samus",img:"dark-samus.jpg"},
    {id:6,name:"Yoshi",img:"yoshi.jpg"},
    {id:7,name:"Kirby",img:"kirby.jpg"},
    {id:8,name:"Fox",img:"fox.jpg"},
    {id:9,name:"Pikachu",img:"pikachu.jpg"},
    {id:10,name:"Luigi",img:"luigi.jpg"},
    {id:11,name:"Ness",img:"ness.jpg"},
    {id:12,name:"Captain Falcon",img:"captain-falcon.jpg"},
    {id:13,name:"Jigglypuff",img:"jigglypuff.jpg"},
    {id:14,name:"Peach",img:"peach.jpg"},
    {id:15,name:"Daisy",img:"daisy.jpg"},
    {id:16,name:"Bowser",img:"bowser.jpg"},
    {id:17,name:"Ice Climbers",img:"ice-climbers.jpg"},
    {id:18,name:"Sheik",img:"sheik.jpg"},
    {id:19,name:"Zelda",img:"zelda.jpg"},
    {id:20,name:"Dr Mario",img:"dr-mario.jpg"},
    {id:21,name:"Pichu",img:"pichu.jpg"},
    {id:22,name:"Falco",img:"falco.jpg"},
    {id:23,name:"Marth",img:"marth.jpg"},
    {id:24,name:"Lucina",img:"lucina.jpg"},
    {id:25,name:"Young Link",img:"young-link.jpg"},
    {id:26,name:"Ganondorf",img:"ganondorf.jpg"},
    {id:27,name:"Mewtwo",img:"mewtwo.jpg"},
    {id:28,name:"Roy",img:"roy.jpg"},
    {id:29,name:"Chrom",img:"chrom.jpg"},
    {id:30,name:"Mr Game & Watch",img:"mr-game-and-watch.jpg"},
    {id:31,name:"Meta Knight",img:"meta-knight.jpg"},
    {id:32,name:"Pit",img:"pit.jpg"},
    {id:33,name:"Dark Pit",img:"dark-pit.jpg"},
    {id:34,name:"Zero Suit Samus",img:"zero-suit-samus.jpg"},
    {id:35,name:"Wario",img:"wario.jpg"},
    {id:36,name:"Snake",img:"snake.jpg"},
    {id:37,name:"Ike",img:"ike.jpg"},
    {id:38,name:"Pokemon Trainer",img:"pokemon-trainer.jpg"},
    {id:39,name:"Diddy Kong",img:"diddy-kong.jpg"},
    {id:40,name:"Lucas",img:"lucas.jpg"},
    {id:41,name:"Sonic",img:"sonic.jpg"},
    {id:42,name:"King Dedede",img:"king-dedede.jpg"},
    {id:43,name:"Olimar",img:"olimar.jpg"},
    {id:44,name:"Lucario",img:"lucario.jpg"},
    {id:45,name:"Rob",img:"rob.jpg"},
    {id:46,name:"Toon Link",img:"toon-link.jpg"},
    {id:47,name:"Wolf",img:"wolf.jpg"},
    {id:48,name:"Villager",img:"villager.jpg"},
    {id:49,name:"Mega Man",img:"mega-man.jpg"},
    {id:50,name:"Wii Fit Trainer",img:"wii-fit-trainer.jpg"},
    {id:51,name:"Rosalina and Luma",img:"rosalina-and-luma.jpg"},
    {id:52,name:"Little Mac",img:"little-mac.jpg"},
    {id:53,name:"Greninja",img:"greninja.jpg"},
    {id:54,name:"Palutena",img:"palutena.jpg"},
    {id:55,name:"Pac Man",img:"pac-man.jpg"},
    {id:56,name:"Robin",img:"robin.jpg"},
    {id:57,name:"Shulk",img:"shulk.jpg"},
    {id:58,name:"Bowser Jr",img:"bowser-jr.jpg"},
    {id:59,name:"Duck Hunt",img:"duck-hunt.jpg"},
    {id:60,name:"Ryu",img:"ryu.jpg"},
    {id:61,name:"Ken",img:"ken.jpg"},
    {id:62,name:"Cloud",img:"cloud.jpg"},
    {id:63,name:"Corrin",img:"corrin.jpg"},
    {id:64,name:"Bayonetta",img:"bayonetta.jpg"},
    {id:65,name:"Inkling",img:"inkling.jpg"},
    {id:66,name:"Ridley",img:"ridley.jpg"},
    {id:67,name:"Simon",img:"simon.jpg"},
    {id:68,name:"Richter",img:"richter.jpg"},
    {id:69,name:"King K Rool",img:"king-k-rool.jpg"},
    {id:70,name:"Isabelle",img:"isabelle.jpg"},
    {id:71,name:"Incineroar",img:"incineroar.jpg"},
    {id:72,name:"Piranha Plant",img:"piranha-plant.jpg"},
    {id:73,name:"Joker",img:"joker.jpg"},
    {id:74,name:"Mii Brawler",img:"mii-brawler.jpg"},
    {id:75,name:"Mii Swordsman",img:"mii-swordsman.jpg"},
    {id:76,name:"Mii Gunner",img:"mii-gunner.jpg"},
  ]
  res
    .status(200)
    .send(characters)
})

app.use(errorHandler = (error, req, res, next) => {
  let response
  if (NODE_ENV === 'production') {
    response = { error: { message: 'server error' } }
  } else {
    console.error(error)
    response = { message: error.message, error }
  }
    res.status(500).json(response)
})

module.exports = app