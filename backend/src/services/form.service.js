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
        const { name } = form;
        const newForm = new Form({
            name,
        });
        await newForm.save();

        return [newForm, null];
    } catch (error) {
        handleError(error, "form.service -> createForm");
    }
}

module.exports = {
    getForms,
    createForm,
};
