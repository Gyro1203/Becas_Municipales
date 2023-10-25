"use strict";
// importa el modulo 'express' para crear las rutas
const express = require("express");

/** Controlador de apelations */
const apelationController = require("../controllers/apelation.controller.js");  

/** Middlewares de autorización */
const authenticationMiddleware = require("../middlewares/authentication.middleware.js");
/** Middlewares de autorización */
const authorizationMiddleware = require("../middlewares/authorization.middleware.js");

/** instancia del enrutador */
const router = express.Router();

// Define el middleware de autenticación para todas las rutas
router.use(authenticationMiddleware);

// Define las rutas para los apelations
router.get("/", apelationController.getApelations);
router.post("/", apelationController.createApelation);
router.get("/:id", apelationController.getApelationById);
router.put("/:id", authorizationMiddleware.isAdmin, apelationController.updateApelationById);
router.delete("/:id", authorizationMiddleware.isAdmin, apelationController.deleteApelationById);
 
// Exporta el enrutador
module.exports = router;
// Path: backend/src/routes/apelation.routes.js
