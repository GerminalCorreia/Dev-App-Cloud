const mongoose = require('mongoose');

var directorSchema = new mongoose.Schema({
  first_name : String,
  last_name : String,
  genre : [String],
  prob : Number
});

module.exports = mongoose.model('director', directorSchema);