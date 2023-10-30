"use strict";
// Importa el modulo 'express' para crear las rutas
const express = require("express");

/** Controlador de formularios */
const formController = require("../controllers/form.controller.js");

/** Middlewares de autorización */
const authorizationMiddleware = require("../middlewares/authorization.middleware.js");

/** Middleware de autenticación */
const authenticationMiddleware = require("../middlewares/authentication.middleware.js");

/** Instancia del enrutador */
const router = express.Router();

// Define el middleware de autenticación para todas las rutas
router.use(authenticationMiddleware);

// Define las rutas para las postulaciones
router.get("/", authorizationMiddleware.isEncargado, formController.getForms);
router.get("/myForms", authorizationMiddleware.isPostulante, formController.getMyForms);
router.post("/", authorizationMiddleware.isPostulante, formController.createFrom);
router.delete("/:id", authorizationMiddleware.isPostulante, formController.deleteForm);
router.get("/:id", authorizationMiddleware.isEncargado, formController.getFormById);

module.exports = router;
