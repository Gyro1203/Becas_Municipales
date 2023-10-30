"use strict";

const { respondSuccess, respondError } = require("../utils/resHandler");
const { handleError } = require("../utils/errorHandler");
const CreateService = require("../services/create.service.js");


/**
 * Crea una beca nueva
 */
async function createBeca(req, res) {
    try {
        const { body } = req;
    
        const [newBeca, createError] = await CreateService.createBeca(body);
    
        if (createError) return respondError(req, res, 400, createError);
        if (!newBeca) {
          return respondError(req, res, 400, "No se creo la postulación");
        }
    
        respondSuccess(req, res, 201, newBeca);
      } catch (error) {
        handleError(error, "create.controller -> getBecas");
        respondError(req, res, 500, "No se creo la postulación");
      }
}


/**
 * Mostrar becas existentes
 */
async function getBecas(req, res) {
    try {
      const [becas, errorBecas] = await CreateService.getBecas();
      if (errorBecas) return respondError(req, res, 404, errorBecas);
  
      becas.length === 0
        ? respondSuccess(req, res, 204)
        : respondSuccess(req, res, 200, becas);
    } catch (error) {
      handleError(error, "create.controller -> getBecas");
      respondError(req, res, 400, error.message);
    }
  }

module.exports = {
  createBeca,
  getBecas,
};
