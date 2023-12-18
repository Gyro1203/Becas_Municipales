"use strict";
// Importa el modelo de datos 'Create'
const Create = require("../models/create.model.js");
const { handleError } = require("../utils/errorHandler.js");


/**
 * Crear nuevas becas
 */
  async function createBeca(beca) {
    try {
      const { typeBeca, descripcionBeca } = beca;
  
      const createFound = await Create.findOne({ typeBeca: beca.typeBeca });
      if (createFound) return [null, "La beca ya está registrada"];
  
      const newBeca = new Create({
        typeBeca,
        descripcionBeca,
      });
      await newBeca.save();
  
      return [newBeca, null];
    } catch (error) {
      handleError(error, "create.service -> createBeca");
    }
  }


  /**
   * Ver Becas existentes
   */
  async function getBecas() {
    try {
        const becas = await Create.find().exec();
        if (!becas) return [null, "No existen becas registradas"];

        return [becas, null];
    } catch (error) {
        handleError(error, "create.service -> getBecas");
    }
}


  /**
   * Becas Vencidas
   */
async function getBecasVencidas() {
  const fechaActual = new Date();
  try {
    const becasVencidas = await Create.find({ vencimientoBeca: { $lt: fechaActual } });
    return becasVencidas;
  } catch (error) {
    handleError(error, "create.service -> getBecasVencidas");
  }
}

module.exports = {
  createBeca,
  getBecas,
  getBecasVencidas,
};
