
const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Mern = new Schema({
  name: String,
  price: String,
  url: String
})

module.exports = mongoose.model('Mern', Mern) 