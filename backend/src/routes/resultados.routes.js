"use strict";
const express = require("express");
const router = express.Router();
const {
createResultado,
getResultadoById,
deleteResultado,
getResultados,
updateResultado} = require("../controllers/resultados.controller.js");




router.get("/", getResultados); // poner authorization en todos
router.get("/:id", getResultadoById);

router.post("/", createResultado);
router.delete("/:id ", deleteResultado);
router.patch("/:id ", updateResultado);

module.exports = router;