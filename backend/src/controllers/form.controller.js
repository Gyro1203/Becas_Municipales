"use strict";

const { respondSuccess, respondError } = require("../utils/resHandler");
const { handleError } = require("../utils/errorHandler");
const { formBodySchema, formIdSchema } = require("../schema/form.schema");
const FormService = require("../services/form.service.js");

/**
 * Obtiene todas las postulaciones
 * @param {Object} req - Objeto de petición
 * @param {Object} res - Objeto de respuesta
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
 * Obtiene las postulaciones de un usuario por medio del rut
 * @param {Object} req - Objeto de petición
 * @param {Object} res - Objeto de respuesta
 */
async function getMyForms(req, res) {
  try {
      const { rut } = req;
      const [froms, errorForms] = await FormService.getMyForms(rut);
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
 * Obtener postulacion por medio del id
 * @param {Object} req - Objeto de petición
 * @param {Object} res - Objeto de respuesta
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
 * Crea un nuevo formulario
 * @param {Object} req - Objeto de petición
 * @param {Object} res - Objeto de respuesta
 */
async function createFrom(req, res) {
    try {
        const { rut, body } = req;
        const { error: bodyError } = formBodySchema.validate(body);
        if (bodyError) return respondError(req, res, 400, bodyError.message);
    
        const [newForm, formError] = await FormService.createForm(body, rut);
    
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
 * Eliminar una postulacion
 * @param {Object} req - Objeto de petición
 * @param {Object} res - Objeto de respuesta
 */
async function deleteForm(req, res) {
  try {
    const { rut, params } = req;
    const { error: paramsError } = formIdSchema.validate(params);
    if (paramsError) return respondError(req, res, 400, paramsError.message);

    const form = await FormService.deleteForm(params.id, rut);
    !form
      ? respondError(
          req,
          res,
          404,
          "El formulario no existe entre las postulaciones del usuario",
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
    getMyForms,
    createFrom,
    deleteForm,
    getFormById,
};
