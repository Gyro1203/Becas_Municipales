"use strict";
// Autorizacion - Comprobar el rol del usuario
const User = require("../models/user.model.js");
const Role = require("../models/role.model.js");
const { respondError } = require("../utils/resHandler.js");
const { handleError } = require("../utils/errorHandler.js");

/**
 * Comprueba si el usuario es administrador
 * @param {Object} req - Objeto de petición
 * @param {Object} res - Objeto de respuesta
 * @param {Function} next - Función para continuar con la siguiente función
 */
async function isEncargado(req, res, next) {
  try {
    const user = await User.findOne({ rut: req.rut });
    const roles = await Role.find({ _id: { $in: user.roles } });
    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "encargado") {
        next();
        return;
      }
    }
    return respondError(
      req,
      res,
      401,
      "Se requiere un rol de encargado para realizar esta acción",
    );
  } catch (error) {
    handleError(error, "authorization.middleware -> isEncargado");
  }
}

/**
 * Comprueba si el usuario es administrador
 * @param {Object} req - Objeto de petición
 * @param {Object} res - Objeto de respuesta
 * @param {Function} next - Función para continuar con la siguiente función
 */
async function isPostulante(req, res, next) {
  try {
    const user = await User.findOne({ rut: req.rut });
    const roles = await Role.find({ _id: { $in: user.roles } });
    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "postulante") {
        next();
        return;
      }
    }
    return respondError(
      req,
      res,
      401,
      "Se requiere un rol de postulante para realizar esta acción",
    );
  } catch (error) {
    handleError(error, "authorization.middleware -> isPostulante");
  }
}

module.exports = {
  isEncargado,
  isPostulante,
};
