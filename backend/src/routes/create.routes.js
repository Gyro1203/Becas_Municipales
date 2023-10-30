"use strict";
// Importa el modulo 'express' para crear las rutas
const express = require("express");

/** Controlador de autenticación */
const createController = require("../controllers/create.controller.js");

/** Instancia del enrutador */
const router = express.Router();

// Define las rutas para la autenticación
router.post("/createBeca", createController.createBeca);
router.post("/getBecas", createController.createBeca);
router.post("/", authorizationMiddleware.isEncargado, createController.createBeca);

// Exporta el enrutador
module.exports = router;
