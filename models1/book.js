const mongoose = require("mongoose");
const Schema = mongoose.Schema;

;


const weightSchema = new Schema({
  title: { type: String, required: true },
  author:  { type: String},
  content: { type: String},
  publishedAt: { type: Date, default: Date.now },
  description: { type: String},
  urlToImage: { type: String},
  url: { type: String},


});

const Weight = mongoose.model("Weight", weightSchema);


//module.exports = Book;
module.exports = Weight;
