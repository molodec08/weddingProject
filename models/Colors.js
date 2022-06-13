const {Schema, model} = require('mongoose');

const schema = new Schema({
  header: {type: String, required: true},
  color1: {type: String, required: false},
  color2: {type: String, required: false},
  color3: {type: String, required: false},
  color4: {type: String, required: false},
  color5: {type: String, required: false},
  color6: {type: String, required: false},
  color7: {type: String, required: false},
  color8: {type: String, required: false}
})

module.exports = model('Colors', schema);