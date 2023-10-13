"use strict";
const mongoose = require("mongoose");

const resultadoSchema = new mongoose.Schema(
  {
    id_postulacion:{
      type: String,
      required: true
    },
    razon:{
    type: String,
    required: false
    },
    aceptado:
    {
      type: Boolean,
      required: true
    }
  },
  {
    versionKey: false,
  },
);

const Resultado = mongoose.model("Resultado", resultadoSchema);

module.exports = Resultado;
