const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    //required: true,
  },
  email: {
    type: String,
   // required: true,
  },
 // image: {
    //type: String,
   // required: true,
  //},
  price: {
    type: Number,
    //equired: true,
  },
  category: {
    type: String,
    //required: true,
  },
  // Add other fields here
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
