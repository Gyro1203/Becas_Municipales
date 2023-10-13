"use strict";
const express = require("express");
const router = express.Router();
const resultadosController = require("../controllers/resultado_postulacion.controller.js");

router.get("/resultados", formController.getForms);
router.post("/submitresultado", formController.createFrom);
router.del("/delresultado", formController.getForms);
router.patch("/editresultado", formController.createFrom);

module.exports = router;