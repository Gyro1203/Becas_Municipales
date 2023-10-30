"use strict";
const mongoose = require("mongoose");

const resultadoSchema = new mongoose.Schema(
  {
    codigo_postulacion:{
      type: String,
      required: true
    },
    isAceptado:
    {
      type: Boolean,
      required: true
    },
    razon:{
      type:String,
      required: false
    },
    fecha:{
      type: Date,
      default: new Date(),
      required: true
    }
  },
  {
    timestamps:true,
    versionKey: false,
  },
);

const Resultado = mongoose.model("Resultado", resultadoSchema);

module.exports = Resultado;
