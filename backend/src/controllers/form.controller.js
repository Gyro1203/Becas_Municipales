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
    
        if (formError) return respondError(req, res, 400, formError);
        if (!newForm) {
          return respondError(req, res, 400, "No se creo la postulación");
        }
    
        respondSuccess(req, res, 201, newForm);
      } catch (error) {
        handleError(error, "form.controller -> createForm");
        respondError(req, res, 500, "No se creo la postulación");
      }
}

/**
 * Obtener postulacion por medio del id
 */
async function getFormById(req, res) {
  try {
    const { params } = req;

    const [form, errorForm] = await FormService.getFormById(params.id);

    if (errorForm) return respondError(req, res, 404, errorForm);

    respondSuccess(req, res, 200, form);
  } catch (error) {
    handleError(error, "form.controller -> getFormById");
    respondError(req, res, 500, "No se pudo obtener la postulación");
  }
}

/**
 * Eliminar una postulacion
 */
async function deleteForm(req, res) {
  try {
    const { params } = req;

    const form = await FormService.deleteForm(params.id);
    !form
      ? respondError(
          req,
          res,
          404,
          "No se encontro el usuario solicitado",
          "Verifique el id ingresado",
        )
      : respondSuccess(req, res, 200, form);
  } catch (error) {
    handleError(error, "form.controller -> deleteForm");
    respondError(req, res, 500, "No se pudo eliminar el formulario");
  }
}

module.exports = {
    getForms,
    createFrom,
    deleteForm,
    getFormById,
};
