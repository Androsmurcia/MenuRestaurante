const mongoose = require("mongoose");

const clienteSchema = new mongoose.Schema({
  Name: { type: String, require: true },
  Address: { type: String, require: true },
  Description: { type: String, require: true },
  Celphone: { type: String, require: true },
  Mail: { type: String, require: true },
});

const Cliente = mongoose.model("Cliente", clienteSchema);
module.exports = Cliente;
