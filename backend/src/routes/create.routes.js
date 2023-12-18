"use strict";
// Importa el modulo 'express' para crear las rutas
const express = require("express");

/** Controlador de autenticación */
const createController = require("../controllers/create.controller.js");

/** Middlewares de autorización */
const authorizationMiddleware = require("../middlewares/authorization.middleware.js");

/** Middleware de autenticación */
const authenticationMiddleware = require("../middlewares/authentication.middleware.js");

/** Instancia del enrutador */
const router = express.Router();

// Define el middleware de autenticación para todas las rutas
router.use(authenticationMiddleware);

// Define las rutas para la autenticación
router.post("/", authorizationMiddleware.isEncargado, createController.createBeca);
router.get("/", createController.getBecas);
router.get("/exp", authorizationMiddleware.isEncargado, createController.getBecasVencidas);


// Exporta el enrutador
module.exports = router;
