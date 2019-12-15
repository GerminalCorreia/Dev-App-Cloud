const mongoose = require('mongoose');
const Actor = require('./actor');

var roleSchema = new mongoose.Schema({
  character : String,
  actors : [Actor]
});

module.exports = mongoose.model('role', roleSchema);