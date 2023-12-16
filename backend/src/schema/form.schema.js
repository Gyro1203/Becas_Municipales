"use strict";

const Joi = require("joi");

/**
 * Esquema de validación para el cuerpo de la solicitud de postulación.
 * @constant {Object}
 */
const formBodySchema = Joi.object({
  username: Joi.string().forbidden().messages({
    "any.unknown": "El nombre de usuario no puede ser modificado",
  }),
  rut: Joi.string().forbidden().messages({
    "any.unknown": "El rut del usuario no puede ser modificado.",
  }),
  typeBeca: Joi.string().required().messages({
    "string.empty": "Debe especificar la beca a la que desea postular.",
    "any.required": "El tipo de beca es obligatorio.",
    "string.base": "El tipo de beca debe ser de tipo string.",
  }),
  birthdate: Joi.date().required()
    .min("1900/1/1")
    .max((Date.now()-3*60*60*1000)-14*365*24*60*60*1000)
    .messages({
      "date.empty": "La fecha de nacimiento no puede estar vacía.",
      "any.required": "La fecha de nacimiento es obligatoria.",
      "date.base": "La fecha de nacimiento debe ser de tipo date.",
      "date.min": "La fecha de nacimiento no puede ser anterior a 1900.",
      "date.max": "La edad del postulante no puede ser menor a 14 años.",
  }),
  address: Joi.string().required().messages({
    "string.empty": "La dirección no puede estar vacía.",
    "any.required": "La dirección es obligatoria.",
    "string.base": "La dirección debe ser de tipo string.",
  }),
  handicap: Joi.string().required().messages({
    "string.empty": "La discapacidad no puede estar vacío.",
    "any.required": "La discapacidad es obligatorio.",
    "string.base": "La discapacidad debe ser de tipo string.",
  }),

}).messages({
  "object.unknown": "No se permiten propiedades adicionales.",
});

/**
 * Esquema de validación para el id de la postulacion.
 * @constant {Object}
 */
const formIdSchema = Joi.object({
  id: Joi.string()
    .required()
    .pattern(/^(?:[0-9a-fA-F]{24}|[0-9a-fA-F]{12})$/)
    .messages({
      "string.empty": "El id no puede estar vacío.",
      "any.required": "El id es obligatorio.",
      "string.base": "El id debe ser de tipo string.",
      "string.pattern.base": "El id proporcionado no es un ObjectId válido.",
    }),
});

module.exports = { formBodySchema, formIdSchema };
