"use strict";
// importa el modelo de datos apelation
const Apelation = require("../models/apelation.model.js");
const { handleError } = require("../utils/errorHandler");
const User = require("../models/user.model.js");
/**
 * Obtiene todos las apelaciones de la base de datos
 * @returns {Promise} Promesa con el objeto de los apelations
 */
async function getApelations() {
    try {
            const apelations = await Apelation.find()
                .select("-password")
                .exec();
            if (!apelations) return [null, "No hay apelaciones"];
            return [apelations, null];
        } catch (error) {
        handleError(error, "apelation.service -> getApelations");
    }
}
/**
 * Crea una nueva apelacion en la base de datos
 * @param {Object} apelation Objeto de apelation
 * @returns {Promise} Promesa con el objeto de apelation creado
 */
async function createApelations( rutuser, apelation) {
    try {
        const { apelacion, razon, fecha, estado } = apelation;
        const { username, rut } = await User.findOne({ rut: rutuser }).exec(); 
        // const apelationFound = await Apelation.findOne({ rut: rutuser }).exec();
        // if (apelationFound) return [null, "Usted ya ha realizado una apelacion"];
        const newApelation = new Apelation({
            username,
            rut,
            apelacion,
            razon,
            fecha,
            estado,
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
 * Filtra las apelaciones por rut
 * @param {String} rutuser
 * @returns 
 */
async function getApelationsByRut(rutuser) {
    try {
        const apelation = await Apelation.findOne({ rut: rutuser }).exec();
        if (!apelation) return [null, "La apelacion no existe"];
        return [apelation, null];
    } catch (error) {
        handleError(error, "apelation.service -> getApelationByRut");
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
        const { estado } = apelation;
        const apelationFound = await Apelation.findById(id);
        if (!apelationFound) return [null, "La apelacion no existe"];
        apelationFound.estado = estado;
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
async function deleteApelationsUsers(id, rutuser) {
    try {
        const apelationFound = await Apelation.findOne( { _id: id, rut: rutuser } ).exec();
        if (!apelationFound) return [null, "La apelacion no existe"];
        await Apelation.deleteOne({ _id: id });
        return [apelationFound, null];
    } catch (error) {
        handleError(error, "apelation.service -> deleteApelationUsers");
    }
}
/**
 * Elimina cualquier apelacion por su id de la base de datos
 * @param {string} id de la apelacion
 * @returns 
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
    getApelationsByRut,
    getApelationsById,
    updateApelationsById,
    deleteApelationsById,
    deleteApelationsUsers,
};
