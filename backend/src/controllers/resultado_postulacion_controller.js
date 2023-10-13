"use strict";

const { respondSuccess, respondError } = require("../utils/resHandler");
const { handleError } = require("../utils/errorHandler");
const { Resultado } = require("../models/resultado_postulacion");

// crear 

async function crearResultado(req, res){
    try{
    const resultadoPostulacion = new Resultado({
        id_postulacion: req.body.id_postulacion,
        razon: req.body.razon,
        aceptado: req.body.aceptado
    });
    const nuevoResultadoPostulacion= await resultadoPostulacion.save();
    res.status(201).json(nuevoResultadoPostulacion);
    } catch (error) {
    res.status(400).json({ message: "error"});
    }
}
async function verResultados(req, res) {
    try {
        const resultadosPostulaciones = await Resultado.find();
        res.status(200).json({ resultadosPostulaciones});
	} catch (error) {
		res.status(500).json({ message: "error" });
	}
}

async function eliminarResultados (req, res) {
    try {
      const resultadoPostulacion = await Resultado.findById(req.id);
      if (!resultadoPostulacion) {
        return res.status(404).json({ message: 'Resultado no encontrado' });
      }
      await resultadoPostulacion.deleteOne();
      res.json({ message: 'Resultado eliminado correctamente' });
    } catch (error) {
      res.status(500).json({ message:  "error" });
    }
  };

async function editarResultado (req, res){
    try {
            const {id, razon, aceptado} = req.body;
            const cambios = {
                razon: razon,
                aceptado: aceptado
                }
            const resUpdated = await AsistenciaEntrada.findOneAndUpdate({ _id: id },{ $set: cambios },{ new: true });
            if (resUpdated) {
                res.status(200).json({updated: resUpdated });
                return;
            } else {
                res.status(500).json({Error: "No se encontro resultado de postulacion" });
                return;
            }
    } catch (error) {
            res.status(500).json({Error:"error"});
    }
}

// TO-DO mostrar postulaciones


module.exports = {
    crearResultado,
    verResultados,
    eliminarResultados,
    editarResultado
  };