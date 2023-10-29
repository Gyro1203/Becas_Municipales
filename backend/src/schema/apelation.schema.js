"use-strict";

const Joi = require("joi");

/**
 * esquema de validacion para apelation
 * @constant {Object}
 */

const apelationBodySchema = Joi.object({
    User: Joi.required().messages({
        "any.required": "El usuario es obligatorio.",
        "string.base": "El usuario debe ser de tipo string.",
    }),
    apelacion: Joi.string().required().alphanum().min(10).messages({
        "string.empty": "La apelación no puede estar vacía.",
        "any.required": "La apelación es obligatoria.",
        "string.base": "La apelación debe ser de tipo string.",
        "string.min": "La apelación debe tener al menos 10 caracteres.",
    }),
    razon: Joi.string().required().messages({
        "string.empty": "La razón no puede estar vacía.",
        "any.required": "La razón es obligatoria.",
        "string.base": "La razón debe ser de tipo string.",
    }),
    fecha: Joi.date().iso().required().messages({
        "any.required": "La fecha es obligatoria.",
        "date.format": "El formato de la fecha es AÑO/MES/DIA",
    }),

    }).messages({
    "object.unknown": "No se permiten propiedades adicionales." });

const apelationIdSchema = Joi.object({
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

module.exports = { 
    apelationBodySchema,
    apelationIdSchema,
};
