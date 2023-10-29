"use strict";

const resHandlers = require("../utils/resHandler");
const errorHandlers = require("../utils/errorHandler");
const { apelationBodySchema, apelationIdSchema } = require("../schema/apelation.schema");

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
    if (error) return resHandlers.repondError(req, res, 400, error);
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
    const { body } = req;
    const { error: bodyError } = apelationBodySchema.validate(body);
    if (bodyError) return resHandlers.respondError(req, res, 400, bodyError.message);

    const [newApelation, error] = await ApelationServices.createApelations(body);

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

    const { error: bodyError } = apelationBodySchema.validate(body);
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
 * Elimina un apelation por su id de la base de datos
 * @async
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
    resHandlers.respondError(req, res, 500, "No se elimino la apealacion");
  }
}

module.exports = {
  getApelations,
  createApelation,
  getApelationById,
  updateApelationById,
  deleteApelationById,
};