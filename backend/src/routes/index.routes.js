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

/** Middleware de autenticación */
const authenticationMiddleware = require("../middlewares/authentication.middleware.js");

/** Instancia del enrutador */
const router = express.Router();

// Define las rutas para los usuarios /api/usuarios
router.use("/users", authenticationMiddleware, userRoutes);
// Define las rutas para la autenticación /api/auth
router.use("/auth", authRoutes);

<<<<<<< HEAD
//router.use("/forms", formRoutes);

router.use("/resultados", resultadosRoute);
=======
router.use("/forms", formRoutes);
>>>>>>> f8788b3dfe0a54b6233cf88e168c83dadc17e52e

// Exporta el enrutador
module.exports = router;
