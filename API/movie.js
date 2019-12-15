const mongoose = require('mongoose');

const Director = new mongoose.Schema({
  first_name : String,
  last_name : String,
  genre : [String],
  prob : Number
});

const Actor = new mongoose.Schema({
  first_name : String,
  last_name : String,
  gender : String
});

const Role = new mongoose.Schema({
  character : String,
  actors : [Actor]
});

var movieSchema = new mongoose.Schema({
  id : Number,
  name : String,
  year : String,
  rank : Number,
  genres : [String],
  directors : [Director],
  roles : [Role]
});

module.exports = mongoose.model('movie', movieSchema);