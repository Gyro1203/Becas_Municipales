"use strict";

const Joi = require("joi");

/**
 * Esquema de validación para el cuerpo de la solicitud de usuario.
 * @constant {Object}
 */

const bodyResultadoSchema = Joi.object({
    codigo_postulacion: Joi.string().required().messages({
      "string.empty": "El codigo de postulacion no puede estar vacío.",
      "any.required": "El codigo de postulacion es obligatorio.",
      "string.base": "El codigo de postulacion debe ser de tipo string.",
    }),
    fecha: Joi.date().default(() => new Date())
    .min("1900-01-01").optional().messages({ // si no hay fecha presente usar la de hoy
      "date.base": "La fecha debe ser de tipo string.",
      "date.min": "La fecha no debe ser anterior al 01/01/1900.",
    }),
    isAceptado: Joi.boolean().optional().messages({
      "any.required": "El atributo aceptado es obligatorio.",
      "boolean.base": "El atributo debe ser de tipo boolean.",
    }),
    razon: Joi.string().optional().min(10).max(250).messages({  
        "string.empty": "La razon no puede estar vacío.",
        "any.required": "La razon es obligatorio.",
        "string.base": "La razon debe ser de tipo string.",
        "string.min": "La razon debe tener al menos 10 caracteres.",
        "string.max": "La razon debe tener como maximo 250 caracteres.",
    }),
  }).messages({
    "object.unknown": "No se permiten propiedades adicionales.",
  });

const idResultadoSchema = Joi.string().required().messages({
    "string.empty": "Id no puede ser vacío.",
    "any.required": "Id es obligatoria.",
    "string.base": "Id debe ser de tipo string.",
  }).messages({
    "object.unknown": "No se permiten propiedades adicionales.",
});


module.exports = { bodyResultadoSchema, idResultadoSchema };
