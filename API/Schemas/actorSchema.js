const mongoose = require('mongoose');

var actorSchema = new mongoose.Schema({
  id : Number,
  first_name : String,
  last_name : String,
  gender : String
});

module.exports = mongoose.model('actor', actorSchema);