"use strict";

const resHandlers = require("../utils/resHandler");
const errorHandlers = require("../utils/errorHandler");
const { apelationBodySchema, apelationIdSchema } = require("../schema/apelation.schema");
const { apelationStatus } = require("../schema/apelation.schema");

/** Servicios de autenticación */
const ApelationServices = require("../services/apelation.service");

/**
 * Obtiene todos los apelations de la base de datos
 * @async
 * @function getApelations
 * @param {Object} req - Objeto de petición
 * @param {Object} res - Objeto de respuesta
 */
async function getApelations(req, res) {
  try {
    const [apelations, error] = await ApelationServices.getApelations();
    if (error) return resHandlers.respondError(req, res, 400, error);
    resHandlers.respondSuccess(req, res, 200, apelations);
  } catch (error) {
    errorHandlers.handleError(error, "apelation.controller -> getApelations");
    resHandlers.respondError(req, res, 400, error.message);
  } 
}

// ... El resto del código sigue igual


/**
 * Crea un nuevo apelation en la base de datos
 * @async
 * @function createApelation
 *  @param {Object} req - Objeto de petición
 * @param {Object} res - Objeto de respuesta
 */ 
async function createApelation(req, res) {
  try {
    const { rut, body } = req;
    const { error: bodyError } = apelationBodySchema.validate(body);
    if (bodyError) return resHandlers.respondError(req, res, 400, bodyError.message);

    const [newApelation, error] = await ApelationServices.createApelations(rut, body);

    if (error) return resHandlers.respondError(req, res, 400, error);
    if (!newApelation) {
      return resHandlers.respondError(req, res, 400, "No se creo la apelacion");
    }

    resHandlers.respondSuccess(req, res, 201, newApelation);
  } catch (error) {
    errorHandlers.handleError(error, "apelation.controller -> createApelation");
  }
}
/**
 * @async
 * @function getApelationByRut
 * @param {Object} req - Objeto de peticion 
 * @param {Object} res - Objeto de respuesta
 * @returns 
 */
async function getApelationByRut(req, res) {
  try {
    const { rut } = req;
    const [apelations, error] = await ApelationServices.getApelationsByRut(
      rut,
    );
    if (error) return resHandlers.respondError(req, res, 400, error);
    resHandlers.respondSuccess(req, res, 200, apelations);
  } catch (error) {
    errorHandlers.handleError(error, "apelation.controller -> getApelations");
    resHandlers.respondError(req, res, 400, error.message);
  } 
}
  /**
 * Obtiene un apelation por su id de la base de datos
 * @async
 * @function getApelationById
 * @param {Object} req - Objeto de petición
 * @param {Object} res - Objeto de respuesta
 */
  async function getApelationById(req, res) {
    try {
      const { params } = req;
      const { error: paramsError } = apelationIdSchema.validate(params);
      if (paramsError) return resHandlers.respondError(req, res, 400, paramsError.message);
  
      const [apelation, error] = await ApelationServices.getApelationsById(
        params.id,
      );
      if (error) return resHandlers.respondError(req, res, 400, error);
      if (!apelation) return resHandlers.respondError(req, res, 400, "No existe esta apelacion");
  
      resHandlers.respondSuccess(req, res, 200, apelation);
    } catch (error) {
      errorHandlers.handleError(error, "apelation.controller -> getApelationById");
      resHandlers.respondError(req, res, 500, "No se obtuvo la apelacion");
    }
}
/**
 * Actualiza un apelation por su id de la base de datos
 * @async
 * @function updateApelationById
 * @param {Object} req - Objeto de petición
 * @param {Object} res - Objeto de respuesta
 */
async function updateApelationById(req, res) {
  try {
    const { params, body } = req;
    const { error: paramsError } = apelationIdSchema.validate(params);
    if (paramsError) return resHandlers.respondError(req, res, 400, paramsError.message);

    const { error: bodyError } = apelationStatus.validate(body);
    if (bodyError) return resHandlers.respondError(req, res, 400, bodyError.message);

    const [apelation, error] = await ApelationServices.updateApelationsById(
      params.id,
      body,
    );
    if (error) return resHandlers.respondError(req, res, 400, error);
    if (!apelation) return resHandlers.respondError(req, res, 400, "No existe la apelacion");

    resHandlers.respondSuccess(req, res, 200, apelation);
  } catch (error) {
    errorHandlers.handleError(error, "apelation.controller -> updateApelationById");
   resHandlers.respondError(req, res, 500, "No se actualizo la apelacion");
  }
}
/**
 * Elimina un apelation por su id de la base de datos, pero solo el postulante puede eliminar su propia apelacion
 * @async
 * @function deleteApelationUsers
 * @param {Object} req - Objeto de petición
 * @param {Object} res - Objeto de respuesta
 */
async function deleteApelationUsers(req, res) {
  try {
    const { rut, params } = req;
    const { error: paramsError } = apelationIdSchema.validate(params);
    if (paramsError) return resHandlers.respondError(req, res, 400, paramsError.message);

    const [apelation, error] = await ApelationServices.deleteApelationsUsers(
      params.id, rut,
    );
    if (error) return resHandlers.respondError(req, res, 400, error);
    if (!apelation) return resHandlers.respondError(req, res, 400, "No existe la apelacion");

    resHandlers.respondSuccess(req, res, 200, apelation);
  } catch (error) {
    errorHandlers.handleError(error, "apelation.controller -> deleteApelationById");
    resHandlers.respondError(req, res, 500, "No se elimino la apelacion");
  }
}
/**
 * Elimina un apelation por su id de la base de datos, pero solo el encargado puede eliminar cualquier apelacion
 * @function deleteApelationById
 * @param {Object} req - Objeto de petición
 * @param {Object} res - Objeto de respuesta
 */
async function deleteApelationById(req, res) {
  try {
    const { params } = req;
    const { error: paramsError } = apelationIdSchema.validate(params);
    if (paramsError) return resHandlers.respondError(req, res, 400, paramsError.message);

    const [apelation, error] = await ApelationServices.deleteApelationsById(
      params.id,
    );
    if (error) return resHandlers.respondError(req, res, 400, error);
    if (!apelation) return resHandlers.respondError(req, res, 400, "No existe la apelacion");

    resHandlers.respondSuccess(req, res, 200, apelation);
  } catch (error) {
    errorHandlers.handleError(error, "apelation.controller -> deleteApelationById");
    resHandlers.respondError(req, res, 500, "No se elimino la apelacion");
  }
}

module.exports = {
  getApelations,
  createApelation,
  getApelationByRut,
  getApelationById,
  updateApelationById,
  deleteApelationById,
  deleteApelationUsers,
};
