"usestrict";
// importa el modulo 'mongoose' para crear la conexion a la base de datos
const mongoose = require("mongoose");
const apelationSchema = new mongoose.Schema(
    { 
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        apelacion: {
            type: String,
            required: true,
        },
        razon: {
            type: String,
            required: true,
        },
    });

    const Apelation = mongoose.model("Apelation", apelationSchema);

    module.exports = Apelation;
