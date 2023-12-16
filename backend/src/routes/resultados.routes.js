"use strict";
const express = require("express");
const router = express.Router();
const {
createResultado,
getResultadoById,
deleteResultado,
getResultados,
getResultadosPendientes,
updateResultado } = require("../controllers/resultados.controller.js");

/** Middlewares de autorización */
const authorizationMiddleware = require("../middlewares/authorization.middleware.js");

/** Middleware de autenticación */
const authenticationMiddleware = require("../middlewares/authentication.middleware.js");

router.use(authenticationMiddleware);

router.get("/postulaciones", authorizationMiddleware.isEncargado, getResultadosPendientes);
router.get("/", authorizationMiddleware.isEncargado, getResultados); // poner authorization en todos
router.get("/:id", authorizationMiddleware.isEncargado, getResultadoById);
router.post("/", authorizationMiddleware.isEncargado, createResultado);
router.delete("/:id ", authorizationMiddleware.isEncargado, deleteResultado);
router.patch("/:id ", authorizationMiddleware.isEncargado, updateResultado);

module.exports = router;
