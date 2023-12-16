"use strict";
// Importa el modulo 'express' para crear las rutas
const express = require("express");

/** Enrutador de usuarios  */
const userRoutes = require("./user.routes.js");

/** Enrutador de resultados de postulaciones  */
const resultadosRoute = require("./resultados.routes.js");

/** Enrutador de autenticación */
const authRoutes = require("./auth.routes.js");

const formRoutes = require("./form.routes.js");

const createRoutes = require("./create.routes.js"); 

/** Middleware de autenticación */
const authenticationMiddleware = require("../middlewares/authentication.middleware.js");

/** Instancia del enrutador */
const router = express.Router();

// Define las rutas para los usuarios /api/usuarios
router.use("/users", authenticationMiddleware, userRoutes);
// Define las rutas para la autenticación /api/auth
router.use("/auth", authRoutes);
// Define la ruta para la apelacion /api/apelation
router.use("/apelation", authenticationMiddleware, require("./apelation.routes.js"));

router.use("/forms", authenticationMiddleware, formRoutes);

router.use("/resultados", authenticationMiddleware, resultadosRoute);
router.use("/create", authenticationMiddleware, createRoutes);

// Exporta el enrutador
module.exports = router;
