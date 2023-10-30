"use strict";
// Importa el modelo de datos 'Create'
const Create = require("../models/create.model.js");
const Role = require("../models/role.model.js");
const { handleError } = require("../utils/errorHandler");


/**
 * Crear nuevas becas
 */

  async function createBeca(beca) {
    try {
      const { typeBeca, descripcionBeca } = beca;
  
      const createFound = await Create.findOne({ typeBeca : typeBeca })
      if (createFound) return [null, "La beca ya está registrada"];
  
      const newBeca = new Create({
        typeBeca,
        descripcionBeca
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


  
  module.exports = {
    createBeca,
    getBecas
  };
  