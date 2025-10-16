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

module.exports = router;