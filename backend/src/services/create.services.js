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
      const { nameBeca, typeBeca } = beca;
  
      const userFound = await User.findOne({ nameBeca : nameBeca })
      if (userFound) return [null, "La beca ya está registrada"];
  
      const newBeca = new Beca({
        nameBeca,
        typeBeca,
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
        const becas = await Beca.find().exec();
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
  