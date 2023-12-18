"use strict";

const Joi = require("joi");

/**
 * Esquema de validación para el cuerpo de la solicitud de inicio de sesión.
 * @constant {Object}
 */
const createBodySchema = Joi.object({
  typeBeca: Joi.string().required().messages({
    "string.empty": "El tipo de beca no puede estar vacío.",
    "any.required": "El tipo de beca es obligatorio.",
    "string.base": "El tipo de beca debe ser de tipo string.",
  }),
  descripcionBeca: Joi.string().required().messages({
    "string.empty": "La descipcion de la beca no puede estar vacía.",
    "any.required": "Ladescipcion de la beca es obligatoria.",
    "string.base": "La descipcion de la beca debe ser de tipo string.",
  }),
  vencimientoBeca: Joi.date().required()
    .min("1900/1/1")
    .max(Date().now.getFullYear() + 5, 11, 31)
    .messages({
      "date.empty": "La fecha de vencimiento no puede estar vacía.",
      "any.required": "La fecha de vencimiento es obligatoria.",
      "date.base": "La fecha de vencimiento debe ser de tipo date.",
      "date.min": "La fecha de vencimiento no puede ser anterior a 1900.",
      "date.max": "La fecha máx de vencimiento es de 5 años.",
  }),
}).messages({
  "object.unknown": "No se permiten propiedades adicionales.",
});

module.exports = { createBodySchema };
