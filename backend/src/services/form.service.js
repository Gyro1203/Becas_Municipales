"use strict";

const Form = require("../models/form.model.js");
const User = require("../models/user.model.js");
const { handleError } = require("../utils/errorHandler");

/**
 * Obtiene las postulaciones que han sido enviadas
 * @returns {Promise} Promesa con el objeto de los usuarios
 */
async function getForms() {
    try {
        const froms = await Form.find().exec();
        if (!froms) return [null, "No hay postulaciones"];

        return [froms, null];
    } catch (error) {
      handleError(error, "form.service -> getForms");
    }
}

/**
 * Obtiene las postulaciones que han sido enviadas
 * @param {Object} rutUser Objeto de usuario
 * @returns {Promise} Promesa con el objeto de usuario
 */
async function getMyForms(rutUser) {
  try {
      const froms = await Form.find({ rut: rutUser }).exec();
      if (!froms) return [null, "El usuario no tiene postulaciones"];

      return [froms, null];
  } catch (error) {
    handleError(error, "form.service -> getMyForms");
  }
}

/**
 * Obtener postulacion por medio del id
 * @param {string} id del usuario
 * @returns {Promise} Promesa con el objeto de usuario
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
 * Crea una nueva postulacion
 * @param {Object} form Objeto de usuario
 * @param {Object} rutUser Objeto de usuario
 * @returns {Promise} Promesa con el objeto de usuario creado
 */
async function createForm(form, rutUser) {
    try {
        const { typeBeca, birthdate, address, handicap, date } = form;
        const { username, rut } = await User.findOne({ rut: rutUser });

        const created = await Form.findOne({ typeBeca: form.typeBeca, rut: rutUser }).exec();
        if (created) return [null, "No se permite mas de una postulación a una misma beca"];

        const newForm = new Form({
            username,
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
 * Elimitar postulacion
 * @param {string} id del usuario
 * @param {Object} rutUser Objeto de usuario
 * @returns {Promise} Promesa con el objeto de usuario creado
 */
async function deleteForm(id, rutUser) {
  try {
    const form = await Form.findOne({ _id: id, rut: rutUser }).exec();
    return await form.deleteOne();
  } catch (error) {
    handleError(error, "form.service -> deleteForm");
  }
}

module.exports = {
    getForms,
    getMyForms,
    createForm,
    deleteForm,
    getFormById,
};
