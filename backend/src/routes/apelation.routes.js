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

router.get("/", apelationController.getApelations, authorizationMiddleware.isEncargado);
router.get("/MyApelacion", authorizationMiddleware.isPostulante,
 apelationController.getApelationByRut);
router.post("/", authorizationMiddleware.isPostulante, apelationController.createApelation);
router.get("/:id", authorizationMiddleware.isEncargado, apelationController.getApelationById);
router.put("/:id", authorizationMiddleware.isEncargado, apelationController.updateApelationById);
router.delete("/MiApelacion/:id",
authorizationMiddleware.isPostulante,
apelationController.deleteApelationUsers);
router.delete("/:id", authorizationMiddleware.isEncargado, apelationController.deleteApelationById);

 
// Exporta el enrutador
module.exports = router;
// Path: backend/src/routes/apelation.routes.js
