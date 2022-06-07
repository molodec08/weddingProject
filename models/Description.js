const {Schema, model} = require('mongoose');

const schema = new Schema({
  header: {type: String, required: true},
  desc: {type: String, required: true},
  date: {type: Date, default: Date.now}
})

module.exports = model('Description', schema);