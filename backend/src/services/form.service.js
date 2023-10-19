"use strict";

const Form = require("../models/form.model.js");

/**
 * Obtiene las postulaciones que han sido enviadas
 */
async function getForms() {
    try {
        const froms = await Form.find().exec();
        if (!froms) return [null, "No hay postulaciones"];

        return [froms, null];
    } catch (error) {
        
    }
}

/**
 * Crea una nueva postulacion
 */
async function createForm(form) {
    try {
        const { name, rut, typeBeca, birthdate, address, handicap, date } = form;
        const newForm = new Form({
            name,
            rut,
            typeBeca,
            birthdate,
            address,
            handicap,
            date, 
        });
        await newForm.save();

        return [newForm, null];
    } catch (error) {
        handleError(error, "form.service -> createForm");
    }
}

/**
 * Obtener postulacion por medio del id
 */
async function getFormById(id) {
  try {
    const form = await Form.findById({ _id: id });

    if (!form) return [null, "La postulacion no existe"];

    return [form, null];
  } catch (error) {
    handleError(error, "form.service -> getFormById");
  }
}

/**
 * Elimitar postulacion
 */
async function deleteForm(id) {
  try {
    return await Form.findByIdAndDelete(id);
  } catch (error) {
    handleError(error, "form.service -> deleteForm");
  }
}

module.exports = {
    getForms,
    createForm,
    deleteForm,
    getFormById,
};
