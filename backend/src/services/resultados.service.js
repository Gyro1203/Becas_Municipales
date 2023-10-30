"use strict";

const Resultado = require("../models/resultados.model.js");
const Form = require("../models/form.model.js");
const { handleError } = require("../utils/errorHandler");

/**
 * crear nuevo resultado
 */
async function createResultado(data) { // 👍
    try {
      const resEncontrado = await Resultado.findOne({ codigo_postulacion: data.codigo_postulacion })
      .exec();
      
      if (resEncontrado) return [null, "Ya existe un resultado para esta postulacion"];
      const newResultado = new Resultado({
        codigo_postulacion: data.codigo_postulacion,
        razon: data.razon,
        isAceptado: data.isAceptado,
      });
      await newResultado.save();
      return [newResultado, null];
    } catch (error) {
      handleError(error, "resultados.service -> createResultado");
      return [null, "No se creo resultado"];
    }
}

/**
 * obtener todos los resultados
 */
async function getResultados() { // 👍 
    try {
        const resultadosPostulaciones = await Resultado.find(); 
        if (!resultadosPostulaciones) return [null, "No hay resultados"];
        return [resultadosPostulaciones, null];
    } catch (error) {
        handleError(error, "resultados.service -> getResultados");
        return [null, "No hay resultados"];
    }
}

/**
 * obetener resultados por id
 */
async function getResultadoById(id) {
    try {
        const resultado = await Resultado.findById({ _id: id }).exec();
        if (!resultado) return [null, "No existe resultado de postulacion"];
        return [resultado, null];
    } catch (error) {
        handleError(error, "resultados.service -> getResultadoById");
        return [null, "No hay resultado"];
    }
}

/**
 * eliminar resultados
 */
async function deleteResultado(id) {
    try {
        const resultado = await Resultado.findByIdAndDelete({ _id: id }).exec();
        if (!resultado) return [null, "No se encontro resultado"];
        return [resultado, null];
    } catch (error) {
        handleError(error, "resultados.service -> deleteResultado");
        return [null, "No hay resultado"];
    }
}

/**
 * actualizar resultados
 */
async function updateResultado(id, body) {
    try {
        const resUpdated = await Resultado
        .findOneAndUpdate({ _id: id }, { $set: body }, { new: true });

        if (!resUpdated) return [null, "No se encontro resultado"];
        return [resUpdated, null];
    } catch (error) {
        handleError(error, "resultados.service -> updateResultado");
        return [null, "No hay resultado"];
    }
}

/**
 * TO-DO mostrar resultados disponibles
 */
async function getResultadosPendientes() {
    // todas las postulaciones que no estan revisadas
    // todos los codigos de postulacion que no estan en Resultado (mongoose collection)
    try {
        const postulacionesDisponibles = [];
        const postulaciones = await Form.find(); // conseguir todas las postulaciones
        for (let i = 0; i < postulaciones.length; i++) {
            // iterar y ver cual no esta guardada como resultado ya
            const resultado = await Resultado
            .findOne({ codigo_postulacion: postulaciones[i]["_id"].valueOf() })
            .exec();
            if (!resultado) {
                postulacionesDisponibles.push(postulaciones[i]);
            }
        }
        return [postulacionesDisponibles, null];
    } catch (error) {
    handleError(error, "resultados.service -> getResultadosPendientes");
    return [null, "Error al buscar postulaciones disponibles"];
    }
}


module.exports = {
    createResultado,
    getResultados,
    getResultadoById,
    deleteResultado,
    updateResultado,
    getResultadosPendientes,
};
