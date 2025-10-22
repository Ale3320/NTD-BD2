const mongoose = require("mongoose");
const articuloSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true, 
  },
  titulo: {
    type: String,
    required: true,
  },
  autores: {
    type: String,
    required: true,
  },
  anioPublicacion: {
    type: Number,
    required: true,
  },
  resumen: {
    type: String,
    required: true,
  },
  cantReferencias: {
    type: Number,
    required: true,
  },
  nombreBD: {
    type: String,
    required: true,
  },
  revista: {
    type: String,
    required: true,
  },
  enlace: {
    type: String,
    required: true,
  }
});
module.exports = mongoose.model("Articulo", articuloSchema);