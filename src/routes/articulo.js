const express = require("express");
const router = express.Router();
const articuloSchema = require("../models/articuloModel");

router.post("/articulos", (req, res) => {
  const articulo = articuloSchema(req.body);
  articulo
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.get("/articulos", (req, res) => {
  articuloSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.put("/articulos/:id", (req, res) => {
  const { id } = req.params;
  const { titulo, autores, anioPublicacion, resumen, catReferencias, nombreBD, revista, enlace} = req.body;
  articuloSchema
        .updateOne({ _id: id }, {
            $set: { titulo, autores, anioPublicacion, resumen, catReferencias, nombreBD, revista, enlace }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.delete("/articulos/:id", (req, res) => {
    const { id } = req.params;
    articuloSchema
        .findByIdAndDelete(id)
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});

module.exports = router;