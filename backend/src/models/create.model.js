"use strict";
// Importa el modulo 'mongoose' para crear la conexion a la base de datos
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


// Crea el esquema de la coleccion 'Crear'
const userSchema = new mongoose.Schema(
  {
    typeBeca: {
      type: String,
      required: true,
      unique: true,
    },
    descripcionBeca: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: { currentTime: ()=> Date.now() - 3 * 60 * 60 * 1000 },
    versionKey: false,
  },
);


/** Modelo de datos 'Create' */
const User = mongoose.model("Create", createSchema);

// Exporta el modelo de datos 'Create'
module.exports = Create;
