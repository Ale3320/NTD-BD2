const mongoose = require("mongoose");
const articuloSchema = mongoose.Schema({
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
  },
  archivoPDF: {
    data: Buffer, // el binario del archivo
    contentType: { type: String, default: "application/pdf" },
    filename: { type: String }
  }
});
module.exports = mongoose.model("Articulo", articuloSchema);