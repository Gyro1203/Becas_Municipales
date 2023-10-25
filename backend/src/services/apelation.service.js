"use strict";
// importa el modelo de datos apelation
const Apelation = require("../models/apelation.model.js");
const { handleError } = require("../utils/errorHandler");
/**
 * Obtiene todos los apelaciones de la base de datos
 * @returns {Promise} Promesa con el objeto de los apelations
 */
async function getApelations() {
    try {
            const apelations = await Apelation.find()
                .select("-password")
                .populate("roles")
                .exec();
            if (!apelations) return [null, "No hay apelaciones"];
            return [apelations, null];
        } catch (error) {
        handleError(error, "apelation.service -> getApelations");
    }
}
/**
 * Crea un nuevo apelation en la base de datos
 * @param {Object} apelation Objeto de apelation
 * @returns {Promise} Promesa con el objeto de apelation creado
 */
async function createApelations(apelation) {
    try {
        const { user, apelacion, razon } = apelation;
        const newApelation = new Apelation({
            user,
            apelacion,
            razon,
        });
        await newApelation.save();
        return [newApelation, null];
    } catch (error) {
        handleError(error, "apelation.service -> createApelation");
    }
}
/**
 * Obtiene un apelation por su id de la base de datos
 * @param {string} Id del apelation
 * @returns {Promise} Promesa con el objeto de apelation
 */
async function getApelationsById(id) {
    try {
        const apelation = await Apelation.findById(id);
        if (!apelation) return [null, "La apelacion no existe"];
        return [apelation, null];
    } catch (error) {
        handleError(error, "apelation.service -> getApelationById");
    }
}   

/**
 * Actualiza un apelation por su id de la base de datos
 * @param {string} Id del apelation
 * @param {Object} apelation Objeto de apelation
 * @returns {Promise} Promesa con el objeto de apelation actualizado
 */
async function updateApelationsById(id, apelation) {
    try {
        const { user, apelacion, razon } = apelation;
        const apelationFound = await Apelation.findById(id);
        if (!apelationFound) return [null, "La apelacion no existe"];
        apelationFound.user = user;
        apelationFound.apelacion = apelacion;
        apelationFound.razon = razon;
        await apelationFound.save();
        return [apelationFound, null];
    } catch (error) {
        handleError(error, "apelation.service -> updateApelationById");
    }
}
/**
 * Elimina un apelation por su id de la base de datos
 * @param {string} Id del apelation
 * @returns {Promise} Promesa con el objeto de apelation eliminado
 */
async function deleteApelationsById(id) {
    try {
        const apelationFound = await Apelation.findById(id);
        if (!apelationFound) return [null, "La apelacion no existe"];
        await Apelation.deleteOne({ _id: id });
        return [apelationFound, null];
    } catch (error) {
        handleError(error, "apelation.service -> deleteApelationById");
    }
}

module.exports = {
    getApelations,
    createApelations,
    getApelationsById,
    updateApelationsById,
    deleteApelationsById,
};
