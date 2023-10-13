"use strict";

const { respondSuccess, respondError } = require("../utils/resHandler");
const { handleError } = require("../utils/errorHandler");
const FormService = require("../services/form.service.js");

/**
 * Obtiene todas las postulaciones
 */
async function getForms(req, res) {
    try {
        const [froms, errorForms] = await FormService.getForms();
        if (errorForms) return respondError(req, res, 404, errorForms);

        froms.length === 0
            ? respondSuccess(req, res, 204)
            : respondSuccess(req, res, 200, froms);
    } catch (error) {
        handleError(error, "form.controller -> getForms");
        respondError(req, res, 400, error.message);
    }
};

/**
 * Crea un nuevo formulario
 */
async function createFrom(req, res) {
    try {
        const { body } = req;
    
        const [newForm, formError] = await FormService.createForm(body);
    
        if (formError) return respondError(req, res, 400, userError);
        if (!newForm) {
          return respondError(req, res, 400, "No se creo la postulación");
        }
    
        respondSuccess(req, res, 201, newForm);
      } catch (error) {
        handleError(error, "form.controller -> createForm");
        respondError(req, res, 500, "No se creo la postulación");
      }
}

module.exports = {
    getForms,
    createFrom,
};
