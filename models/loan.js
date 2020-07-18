const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BorrowerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  fathername: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  whatsapp: {
    type: Number,
    required: true,
  },
  Paddress: {
    type: String,
    required: true,
  },
  Caddress: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  period: {
    type: Number,
    required: true,
  },
});

const Borrowers = mongoose.model("Borrowers", BorrowerSchema);

module.exports = Borrowers;