"use-strict";

const Joi = require("joi");

/**
 * esquema de validacion para apelation
 * @constant {Object}
 */

const apelationBodySchema = Joi.object({
    username: Joi.forbidden().messages({
        "any.required": "El usuario es obligatorio.",
        "string.base": "El usuario debe ser de tipo string.",
    }),
    rut: Joi.forbidden().messages({
        "any.required": "El rut es obligatorio.",
        "string.base": "El rut debe ser de tipo string.",
    }),
    apelacion: Joi.string().required().min(10).messages({
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
    fecha: Joi.date().required().messages({
        "any.required": "La fecha es obligatoria.",
        "date.format": "El formato de la fecha es AÑO-MES-DIA",
    }),
    estado: Joi.boolean().forbidden().messages({
        "boolean.base": "El estado debe ser de tipo boolean.",
        "any.required": "El estado es obligatorio.",
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

const apelationStatus = Joi.object({
    username: Joi.forbidden().messages({
        "any.required": "El usuario es obligatorio.",
        "string.base": "El usuario debe ser de tipo string.",
    }),
    rut: Joi.forbidden().messages({
        "any.required": "El rut es obligatorio.",
        "string.base": "El rut debe ser de tipo string.",
    }),
    apelacion: Joi.string().forbidden().min(10).messages({
        "string.empty": "La apelación no puede estar vacía.",
        "any.required": "La apelación es obligatoria.",
        "string.base": "La apelación debe ser de tipo string.",
        "string.min": "La apelación debe tener al menos 10 caracteres.",
    }),
    razon: Joi.string().forbidden().messages({
        "string.empty": "La razón no puede estar vacía.",
        "any.required": "La razón es obligatoria.",
        "string.base": "La razón debe ser de tipo string.",
    }),
    fecha: Joi.date().iso().forbidden().messages({
        "any.required": "La fecha es obligatoria.",
        "date.format": "El formato de la fecha es AÑO-MES-DIA",
    }),
    estado: Joi.string().required().valid("Aceptada", "Rechazada", "En revisión").messages({
        "string.base": "El estado debe ser de tipo texto.",
        "string.empty": "El estado no puede estar vacío.",
        "string.valid": "El estado debe ser Aceptada, Rechazada o En revisión.",
        "any.required": "El estado es obligatorio.",
    }),

    }).messages({
    "object.unknown": "No se permiten propiedades adicionales." });

module.exports = { 
    apelationBodySchema,
    apelationIdSchema,
    apelationStatus,
};
