const mongoose = require('mongoose');
const Director = require('./directorSchema');
const Role = require('./roleSchema');

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