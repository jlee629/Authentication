//contact.js, Jungyu Lee, 301236221, Oct 18 2022

let mongoose = require('mongoose');

// create a model class
let contactModel = mongoose.Schema({
    name: String,
    number: String,
    email: String
},
{
    collection: "contact"
});

module.exports = mongoose.model('Contact', contactModel);