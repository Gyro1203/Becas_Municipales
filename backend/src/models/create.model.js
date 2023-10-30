"use strict";
// Importa el modulo 'mongoose' para crear la conexion a la base de datos
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


// Crea el esquema de la coleccion 'Crear'
const userSchema = new mongoose.Schema(
  {
    nameBeca: {
      type: String,
      required: true,
      unique: true,
    },
    typeBeca: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  },
);


/** Modelo de datos 'Create' */
const User = mongoose.model("Create", createSchema);

// Exporta el modelo de datos 'Create'
module.exports = Create;
