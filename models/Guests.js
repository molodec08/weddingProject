const {Schema, model} = require('mongoose');

const schema = new Schema({
    name: {type: String, required: true},
    desc: {type: String},
    img: {type: String},
    active: {type: Boolean}
});

module.exports = model('Guests', schema);