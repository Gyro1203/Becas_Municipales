"use strict";

const { respondSuccess, respondError } = require("../utils/resHandler");
const { handleError } = require("../utils/errorHandler");
const { Resultado } = require("../models/resultados.model");
const ResultadoService = require("../services/resultados.service");
const { bodyResultadoSchema, idResultadoSchema} = require("../schema/resultados.schema");

// crear 

async function createResultado(req, res){
    try{
      //validar
      const { error: bodyError } = bodyResultadoSchema.validate(req.body);
      if (bodyError) return respondError(req, res, 500, bodyError.message);
      // decirle al service que guarde
     const [newResultado, resultadoError] = await ResultadoService.createResultado(req.body);
      //retornar si salio bien o mal
      if (resultadoError) return respondError(req, res, 500, resultadoError);
      if (!newResultado) {
        return respondError(req, res, 400, "No se creo el usuario");
      }
      respondSuccess(req, res, 201, newResultado);
    } catch (error) {
      handleError(error, "resultados.controller -> createResultado");
      respondError(req, res, 500, "No se creó resultado de postulacion");
    }
}

async function getResultadoById(req, res) {
    try {
      const { error: idError } = idResultadoSchema.validate(req.params.id)
      if(idError){
        handleError(error, "resultados.controller -> getResultadoById");
        respondError(req, res, 500, "Id no es valido");
      }
      const [newResultado, resultadoError] = await ResultadoService.getResultadoById(req.params.id);
      if(resultadoError || !newResultado){
        handleError(error, "resultados.controller -> getResultadoById");
        respondError(req, res, 500, "No se encontro resultado");
      }
      respondSuccess(req, res, 201, newResultado);
    } catch (error) {
      handleError(error, "resultados.controller -> getResultadoById");
      respondError(req, res, 500, "No se encontro resultado");
    }
}

async function getResultados(req, res) {
  try {
    const [resultados, resError] = await ResultadoService.getResultados();
    if(!resultados){
      return respondError(req, res, 400, "No se pudo conseguir los resultados");
    } 
    respondSuccess(req, res, 201, resultados);
	} catch (error) {
    handleError(error, "resultados.controller -> getResultados");
    respondError(req, res, 400, "No se pudo conseguir los resultados");
  }
}

async function deleteResultado (req, res) {
    try {
      const { error: idError } = idResultadoSchema.validate(req.params.id)
      if(idError){
        handleError(error, "resultados.controller -> deleteResultado");
        respondError(req, res, 500, "Id no es valido");
      }

      const eliminado = await ResultadoService.deleteResultado(req.params.id);
      if(!eliminado){
        handleError(error, "resultados.controller -> deleteResultado");
        respondError(req, res, 500, "No se encontro resultado");
      }
      respondSuccess(req, res, 201, eliminado);
    } catch (error) {
      handleError(error, "resultados.controller -> deleteResultado");
        respondError(req, res, 500, "Error al eliminar resultado");
    }
  };

async function updateResultado (req, res){
    try {
      // validar id
      const { error: idError } = idResultadoSchema.validate(req.params.id)
      if(idError){
        handleError(error, "resultados.controller -> updateResultado");
        respondError(req, res, 500, "Id no es valido");
      }
      // validar body
      const { error: bodyError } = bodyResultadoSchema.validate(req.params.id)
      if(bodyError){
        handleError(error, "resultados.controller -> updateResultado");
        respondError(req, res, 500, "Request body no es valido");
      }
      
      const updatedResultado = ResultadoService.deleteResultado(req.params.id, req.body)
      if(!updatedResultado){
        handleError(error, "resultados.controller -> updateResultado");
        respondError(req, res, 500, "No se encontro resultado");
      }
      respondSuccess(req, res, 201, newResultado);
    } 
    catch (error) {
      handleError(error, "resultados.controller -> updateResultado");
        respondError(req, res, 500, "Erro al actualizar resultado");
    }
}

// TO-DO mostrar postulaciones disponibles
async function getResultadosPendientes(req, res) {
  try{
    const [pendientes, postError] = await ResultadoService.getResultadosPendientes();
    if(!pendientes || pendientes.length === 0){
      respondError(req, res, 500, "No se encontraron postulaciones");
      return;
    }
    respondSuccess(req, res, 201, pendientes);
  }catch (error) {
    handleError(error, "resultados.controller -> getResultadosPendientes");
    respondError(req, res, 500, "Error al buscar postulaciones");
  }
}


module.exports = {
    createResultado,
    getResultados,
    getResultadoById,
    deleteResultado,
    updateResultado,
    getResultadosPendientes
  };